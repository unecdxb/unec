'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import { AlertCircle, CheckCircle2, Upload, X, Loader2 } from 'lucide-react';
import SubTitle from '../common/SubTitle';

/* ---------------- TYPES ---------------- */

interface JobFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  linkedIn?: string;
  coverLetter: string;
  resume: FileList;
  availability: string;
  expectedSalary: string;
  termsAccepted: boolean;
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

const positionOptions: OptionType[] = [
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
  { value: "fullstack", label: "Full Stack Developer" },
  { value: "designer", label: "UI/UX Designer" },
  { value: "manager", label: "Project Manager" },
];

const experienceOptions: OptionType[] = [
  { value: "0-1", label: "0-1 years" },
  { value: "1-3", label: "1-3 years" },
  { value: "3-5", label: "3-5 years" },
  { value: "5-10", label: "5-10 years" },
  { value: "10+", label: "10+ years" },
];

const availabilityOptions: OptionType[] = [
  { value: "immediate", label: "Immediate" },
  { value: "2weeks", label: "2 weeks notice" },
  { value: "1month", label: "1 month notice" },
  { value: "2months", label: "2+ months" },
];

/* ---------------- CUSTOM STYLES FOR REACT-SELECT ---------------- */

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

const JobForm: React.FC = () => {

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<JobFormData>({
    mode: 'onBlur'
  });

  /* ---------------- FILE VALIDATION ---------------- */

  const validateFile = (fileList: FileList) => {
    if (!fileList || fileList.length === 0) return 'Resume is required';

    const file = fileList[0];
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!validTypes.includes(file.type)) return 'Only PDF and Word documents are allowed';
    if (file.size > 5 * 1024 * 1024) return 'File size must be less than 5MB';

    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  /* ---------------- SUBMIT ---------------- */

  const onSubmit: SubmitHandler<JobFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        const value = data[key as keyof JobFormData];
        if (key === 'resume' && value instanceof FileList && value[0]) {
          formData.append(key, value[0]);
        } else if (key !== 'resume') {
          formData.append(key, String(value));
        }
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully! We will review your application and get back to you soon.'
      });

      reset();
      setUploadedFile(null);

      setTimeout(() => setSubmitStatus(null), 5000);

    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <section className="sp-py bg-light" id="apply-for-job">
      <div className="container">
            <SubTitle title="Join Our Team" />
        <div className="bg-white/60 p-4 xl:p-10">
            <p className="text-gray-600 ">* Fill out the form below to apply and take the next step in your career with us!</p>
            <hr className="h-1 border-gray-200 w-[50%] mt-2" />
          <div className="mb-8">
          </div>

          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg flex gap-3 ${submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
              {submitStatus.type === 'success'
                ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
              <span>{submitStatus.message}</span>
            </div>
          )}

          <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* FULL NAME */}
              <div> 
                {/* <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2"> Full Name <span className="text-red-500">*</span> </label> */}
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  className={`w-full pr-4 py-3 border-b focus:border-black/50 focus:outline-none placeholder-black/60 focus:placeholder-black/40 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label> */}
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
                  className={`w-full pr-4 py-3 border-b focus:outline-none focus:border-black/50 placeholder-black/60 focus:placeholder-black/40 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                {/* <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label> */}
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  className={`w-full pr-4 py-3 border-b focus:border-black/50 placeholder-black/60 focus:outline-none focus:placeholder-black/40 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* POSITION - React Select */}
              <div>
                {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position <span className="text-red-500">*</span>
                </label> */}
                <Controller
                  name="position"
                  control={control}
                  rules={{ required: 'Please select a position' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      instanceId="position-select"
                      options={positionOptions}
                      placeholder="Select a position"
                      value={positionOptions.find(opt => opt.value === field.value) || null}
                      onChange={(opt) => field.onChange(opt?.value)}
                      styles={customSelectStyles}
                      // classNamePrefix="react-select"
                      className="custom-select"
                      classNamePrefix="custom-select"
                    />
                  )}
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.position.message}
                  </p>
                )}
              </div>

              {/* EXPERIENCE - React Select */}
              <div>
                {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience <span className="text-red-500">*</span>
                </label> */}
                <Controller name="experience" control={control} rules={{ required: 'Please select your experience level' }} render={({ field }) => (
                    <Select
                      {...field}
                      instanceId="experience-select"
                      options={experienceOptions}
                      placeholder="Select experience level"
                      value={experienceOptions.find(opt => opt.value === field.value) || null}
                      onChange={(opt) => field.onChange(opt?.value)}
                      styles={customSelectStyles}
                      className="custom-select"
                      classNamePrefix="custom-select"
                    />
                  )}
                />
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.experience.message}
                  </p>
                )}
              </div>

              {/* LINKEDIN */}
              <div>
                {/* <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile (Optional)
                </label> */}
                <input
                  type="url"
                  id="linkedIn"
                  {...register('linkedIn', {
                    pattern: {
                      value: /^https?:\/\/(www\.)?linkedin\.com\/.+$/,
                      message: 'Please enter a valid LinkedIn URL'
                    }
                  })}
                  className={`w-full pr-4 py-3 border-b focus:border-black/50 placeholder-black/60 focus:outline-none focus:placeholder-black/40 ${errors.linkedIn ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="LinkedIn Profile (Optional)"
                />
                {errors.linkedIn && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.linkedIn.message}
                  </p>
                )}
              </div>
            </div>


           <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {/* COVER LETTER */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="coverLetter"
                  rows={5}
                  {...register('coverLetter', {
                    required: 'Cover letter is required',
                    minLength: { value: 50, message: 'Cover letter must be at least 50 characters' }
                  })}
                  className={`w-full pr-4 py-3 border-b focus:outline-none focus:placeholder-black/60 ${errors.coverLetter ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Tell us why you're a great fit for this position..."
                />
                {errors.coverLetter && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.coverLetter.message}
                  </p>
                )}
              </div>

              {/* RESUME UPLOAD */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume <span className="text-red-500">*</span>
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center ${errors.resume ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                  }`}>
                  {!uploadedFile ? (
                    <>
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                      <label htmlFor="resume" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-700 font-medium">
                          Click to upload
                        </span>
                        <span className="text-gray-600"> or drag and drop</span>
                        <p className="text-xs text-gray-500 mt-1">PDF or Word (Max 5MB)</p>
                      </label>
                      <input
                        type="file"
                        id="resume"
                        {...register('resume', { validate: validateFile })}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </>
                  ) : (
                    <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700">{uploadedFile.name}</span>
                        <span className="text-xs text-gray-500">
                          ({(uploadedFile.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.resume.message}
                  </p>
                )}
              </div>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AVAILABILITY - React Select */}
              <div>
                {/* <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability <span className="text-red-500">*</span>
                </label> */}
                <Controller
                  name="availability"
                  control={control}
                  rules={{ required: 'Please select your availability' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={availabilityOptions}
                      instanceId="availability-select"
                      placeholder="When can you start?"
                      value={availabilityOptions.find(opt => opt.value === field.value) || null}
                      onChange={(opt) => field.onChange(opt?.value)}
                      styles={customSelectStyles}
                      className="custom-select"
                      classNamePrefix="custom-select"
                    />
                  )}
                />
                {errors.availability && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.availability.message}
                  </p>
                )}
              </div>

              {/* EXPECTED SALARY */}
              <div>
                {/* <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Salary <span className="text-red-500">*</span>
                </label> */}
                <input
                  type="text"
                  id="expectedSalary"
                  {...register('expectedSalary', {
                    required: 'Expected salary is required'
                  })}
                  className={`w-full pr-4 py-3 border-b placeholder-black/60 focus:border-black/50 focus:outline-none focus:placeholder-black/40 ${errors.expectedSalary ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="e.g., $80,000 - $100,000"
                />
                {errors.expectedSalary && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.expectedSalary.message}
                  </p>
                )}
              </div>
            </div>
            
            {/* TERMS */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="termsAccepted"
                {...register('termsAccepted', {
                  required: 'You must accept the terms and conditions'
                })}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="termsAccepted" className="text-sm text-gray-700">
                I agree to the terms and conditions and privacy policy <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.termsAccepted.message}
              </p>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-fit ml-auto bg-gradient-to-r from-black/60 to-black/80 hover:from-black/80 hover:to-black/90 text-white cursor-pointer font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                'Submit Application'
              )}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JobForm;