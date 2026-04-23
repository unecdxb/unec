
'use client';
import { motion } from 'framer-motion';
import { moveUp } from '../motionVarients';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import { AlertCircle, CheckCircle2, Loader2, Mail, User, MessageSquare } from 'lucide-react';
import { components } from "react-select";
import Image from "next/image";


/* ---------------- TYPES ---------------- */

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  query: string;
  message: string;
  newsletter: boolean;
}

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

type OptionType = {
  label: string;
  value: string;
};

/* ---------------- OPTIONS ---------------- */

const queryOptions: OptionType[] = [
  { value: "general", label: "General Enquiry" },
  { value: "supplier enquiry", label: "Supplier Enquiry" },
  { value: "subcontractor enquiry", label: "Subcontractor Enquiry" },
  { value: "tender enquiry", label: "Tender Enquiry" },
  { value: "marketing & media", label: "Marketing & Media" },
  { value: "complaints", label: "Complaints" },
  { value: "whistleblowing", label: "Whistleblowing" },
  { value: "other", label: "Other" },
];

/* ---------------- CUSTOM STYLES ---------------- */

const customSelectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    minHeight: '48px',
    borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
    boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none',
    '&:hover': {
      borderColor: '#3b82f6'
    }
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#e0e7ff' : 'white',
    color: state.isSelected ? 'white' : '#1f2937',
    '&:active': {
      backgroundColor: '#3b82f6'
    }
  })
};

const ContactForm: React.FC = () => {

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    mode: 'onChange'
  });

  /* ---------------- SUBMIT ---------------- */

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/admin/contact/enquiry", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success) {
        alert(res.message);
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! We will get back to you within 24 hours.'
        });
        reset();
      } else {
        alert(res.message);
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send your message. Please try again.'
        });
      }
    } catch (error) {
      console.log("Error sending message", error);
      alert("Sorry, something went wrong. Please try again later.");
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <section className=" bg-white sp-pb" id="contact-form">
      <div className='bg-black text-white text-29 text-center py-6'>
        CONTACT BY EMAIL
      </div>
      <div className="container sp-pt">
        <div className="grid grid-cols-1">
          <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className=" overflow-hidden xl:order-2">



            <form className="max-w-7xl mx-auto px-6 py-10 text-black" onSubmit={handleSubmit(onSubmit)}>
              {/* Intro */}
              <p className="font-bold mb-2 text-16">
                Please fill out the form below and we will get back to you shortly.
              </p>
              <p className="mb-10 text-16 font-bold">
                For employment-related queries, please visit{" "}
                <a href="/careers" target="_blank" className="text-red-600 font-semibold">
                  [UNEC] CAREERS
                </a>
              </p>

              {submitStatus && (
                <div className={`mb-6 p-4 flex gap-3 ${submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border-bborder-green-200'
                  : 'bg-red-50 text-red-800 border-bborder-red-200'
                  }`}>
                  {submitStatus.type === 'success'
                    ? <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* First Name */}
                <div>
                  <label className="block mb-2 font-medium text-14">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('firstName', {
                      required: 'First name is required',
                      minLength: { value: 2, message: 'Minimum 2 characters' }
                    })}
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block mb-2 font-medium text-14">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject', {
                      required: 'Subject is required',
                      minLength: { value: 5, message: 'Minimum 5 characters' }
                    })}
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-medium text-14">
                    Query <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="query"
                    control={control}
                    rules={{ required: 'Please select a query type' }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={queryOptions}
                        placeholder="Select query type"
                        value={queryOptions.find(opt => opt.value === field.value) || null}
                        onChange={(opt) => field.onChange(opt?.value)}
                        classNamePrefix="contact-form-select"
                        components={{
                          DropdownIndicator,
                          IndicatorSeparator: () => null, // removes the vertical line
                        }}
                      />
                    )}
                  />
                  {errors.query && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.query.message}
                    </p>
                  )}
                </div>

                {/* Query */}
                {/* <div>
                  <label className="block mb-2 font-medium">
                    Query<span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-black px-4 py-3 focus:outline-none"
                  >
                    <option>GENERAL ENQUIRY</option>
                    <option>SUPPORT</option>
                    <option>PARTNERSHIP</option>
                  </select>
                </div> */}

                {/* Last Name */}
                <div>
                  <label className="block mb-2 font-medium text-14">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('lastName', {
                      required: 'Last name is required',
                      minLength: { value: 2, message: 'Minimum 2 characters' }
                    })}
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium text-14">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Message must be at least 20 characters' }
                    })}
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 md:-mt-16 lg:-mt-28 xl:-mt-29 font-medium text-14">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subscribe */}
              <div className="flex items-center gap-3 mt-10">
                <input type="checkbox" className="w-5 h-5 border border-black" />
                <label className="uppercase text-sm tracking-wide">
                  Subscribe to our newsletter
                </label>
              </div>

              {/* Submit */}
              <div className='w-full grid grid-cols-3 max-md:grid-cols-1'>
                <div className='col-span-1 md:mr-5'>
                  <button
                    type="submit"
                    className="mt-10 cursor-pointer bg-black text-13 text-white w-full py-4 font-semibold tracking-widest hover:bg-neutral-800 transition font-mono"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>



          </motion.div>
          {/* <div className="h-[550px] xl:order-1 overflow-hidden relative">
            <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }}>
              <iframe className='absolute top-[-80px] left-0 h-full min-h-[350px] xl:min-h-[500px]'
                src="https://www.google.com/maps/d/embed?mid=1sJaPSk6dkzxLcOaPnPYyI0jNUJQ-TS4"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy">
              </iframe>

            </motion.div>
          </div> */}


        </div>
      </div>
    </section>
  );
};

export default ContactForm;


const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image
        src="/assets/images/contact-us/arrow_down.svg"
        alt="arrow"
        width={14}
        height={14}
        className={`transition-transform duration-200 ${props.selectProps.menuIsOpen ? "rotate-180" : ""
          }`}
      />
    </components.DropdownIndicator>
  );
};
