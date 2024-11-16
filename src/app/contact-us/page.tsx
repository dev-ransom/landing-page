"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
interface FormData {
  fullName: string;
  email: string;
  companyName: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const formErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required";
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      formErrors.email = "A valid email is required";
    }
    if (!formData.companyName.trim()) {
      formErrors.companyName = "Company name is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
		setErrors({});
      alert("Form submitted successfully!");
      setFormData({ fullName: "", email: "", companyName: "" });
    }
  };



  return (
    <div className="min-h-screen bg-[#202942]  flex items-center justify-center pt-[15vh]">
      <div className="p-8 rounded-lg md:w-[60%] w-[95%] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Contact our <span className="text-baseColor">Team</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Let’s help you get started. Please complete this form to give our
            team more information about your business needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-bold text-gray-300">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.fullName ? "border border-red-500" : "border border-gray-600"
              }`}
              placeholder="Enter your full name here"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-300">
              Your Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border border-red-500" : "border border-gray-600"
              }`}
              placeholder="Enter your email here"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="companyName" className="block text-sm font-bold text-gray-300">
              Your Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.companyName ? "border border-red-500" : "border border-gray-600"
              }`}
              placeholder="Enter your company name here"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

        <Button label="Send Message" width="w-full"/>
        </form>

        
      </div>
    </div>
  );
};

export default Page;
