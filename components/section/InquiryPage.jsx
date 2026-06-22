"use client";

import { useState } from "react";

export default function Inquiry() {
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    projectType: "",
    message: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setStatus("loading");

      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          projectType: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32">
        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">
            Inquiry
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-medium tracking-tight leading-none text-zinc-900">
            Let's create
            <br />
            images that sell.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            Tell us about your products and we'll prepare a custom quote.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl lg:space-y-14 space-y-6"
        >
          {/* Name */}
          <FloatingInput
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email */}
          <FloatingInput
            id="email"
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Contact Number */}
          <FloatingInput
            id="contactNumber"
            name="contactNumber"
            type="tel"
            label="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />

          {/* Product Type */}
          <FloatingInput
            id="projectType"
            name="projectType"
            label="Product Type"
            value={formData.projectType}
            onChange={handleChange}
          />

          {/* Message */}
          <div className="relative">
            <textarea
              rows={5}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              required
              className="
                peer
                w-full
                resize-none
                border-b border-zinc-300
                bg-transparent
                pt-8 pb-3
                outline-none
                transition-colors
                focus:border-primary
              "
            />

            <label
              htmlFor="message"
              className="
                absolute left-0 top-7
                text-zinc-400
                pointer-events-none
                transition-all duration-300
                peer-placeholder-shown:text-xl
                peer-placeholder-shown:top-7
                peer-focus:top-1
                peer-focus:text-xs
                peer-focus:text-primary
                peer-valid:top-1
                peer-valid:text-xs
              "
            >
              Project Details
            </label>
          </div>

          {/* Button */}
          <div className="pt-10">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`
                inline-flex items-center gap-3 rounded-full
                px-8 py-4 text-white transition-all duration-300

                ${
                  status === "success"
                    ? "bg-green-600"
                    : "bg-primary hover:opacity-90"
                }

                ${status === "loading" ? "opacity-80" : ""}
              `}
            >
              {status === "loading" && (
                <span
                  className="
                    h-5 w-5
                    rounded-full
                    border-2 border-white
                    border-t-transparent
                    animate-spin
                  "
                />
              )}

              {status === "success" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}

              <span>
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                  ? "Inquiry Sent"
                  : "Request Quote"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function FloatingInput({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="
          peer
          w-full
          border-b border-zinc-300
          bg-transparent
          pt-8 pb-3
          outline-none
          transition-colors
          focus:border-primary
        "
      />

      <label
        htmlFor={id}
        className="
          absolute left-0 top-7
          text-zinc-400
          pointer-events-none
          transition-all duration-300
          peer-placeholder-shown:text-xl
          peer-placeholder-shown:top-7
          peer-focus:top-1
          peer-focus:text-xs
          peer-focus:text-primary
          peer-valid:top-1
          peer-valid:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}