
'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import { AlertCircle, CheckCircle2, Loader2, Mail, User, MessageSquare } from 'lucide-react';

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
  { value: "support", label: "Technical Support" },
  { value: "sales", label: "Sales Inquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "feedback", label: "Feedback" },
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
    mode: 'onBlur'
  });

  /* ---------------- SUBMIT ---------------- */

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form Data:', data);

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you within 24 hours.'
      });

      reset();

      setTimeout(() => setSubmitStatus(null), 6000);

    } catch {
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
    <section className=" bg-gradient-to-br from-slate-50 to-blue-50 sp-py">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white  overflow-hidden">

          {/* Header Section */}
     

          {/* Form Section */}
          <div className="p-8">
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

            <div className="space-y-6">

              {/* First Row: First Name, Last Name, Email */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10">

                {/* FIRST NAME */}
                <div>
                  {/* <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label> */}
                  <div className="relative">
                    {/* <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName', {
                        required: 'First name is required',
                        minLength: { value: 2, message: 'Minimum 2 characters' }
                      })}
                      className={`w-full pl-0 pr-4 py-3 border-b placeholder-black/60 focus:placeholder-black/40 focus:border-black/50 focus:outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="First Name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* LAST NAME */}
                <div>
                  {/* <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label> */}
                  <div className="relative">
                    {/* <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName', {
                        required: 'Last name is required',
                        minLength: { value: 2, message: 'Minimum 2 characters' }
                      })}
                      className={`w-full pl-0 pr-4 py-3 border-b placeholder-black/60 focus:placeholder-black/40 focus:border-black/50 focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Last Name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label> */}
                  <div className="relative">
                    {/* <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" /> */}
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full pl-0 pr-4 py-3 border-b placeholder-black/60 focus:placeholder-black/40 focus:border-black/50 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Second Row: Subject and Query */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">

                {/* SUBJECT */}
                <div>
                  {/* <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label> */}
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', {
                      required: 'Subject is required',
                      minLength: { value: 5, message: 'Minimum 5 characters' }
                    })}
                    className={`w-full px-4 py-3 border-b focus:ring-none focus:outline-none  ${errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* QUERY - React Select */}
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                    Query Type <span className="text-red-500">*</span>
                  </label> */}
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
                        styles={customSelectStyles}
                        classNamePrefix="cmn-select"
                        className="cmn-select"
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

              </div>

              {/* MESSAGE */}
              <div>
                {/* <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label> */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 20, message: 'Message must be at least 20 characters' }
                    })}
                    className={`w-full pl-11 pr-4 py-3 border-b focus:outline-none focus:placeholder:text-black/50 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* NEWSLETTER CHECKBOX */}
             <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50  border-bborder-blue-100 w-fit">
                  <input
                    type="checkbox"
                    id="newsletter"
                    {...register('newsletter')}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700 cursor-pointer">
                    Subscribe to our newsletter for updates and exclusive content
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex gap-4 w-full">
                  <button type="button" onClick={handleSubmit(onSubmit)} disabled={isSubmitting} className="flex-1 bg-gradient-to-r from-black/50 to-black hover:from-black hover:to-black disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-6  transition-all duration-200 flex items-center justify-center gap-2 shadow-lg 
                hover:shadow-xl cursor-pointer" >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;