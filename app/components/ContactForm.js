"use client";

import { useState } from "react";
import { sendQuery } from "../lib/services";

function ContactForm() {
  const [formFields, setFormFields] = useState({
    fullName: "",
    email: "",
    query: "",
  });

  const handleChange = (e, key) => {
    const value = e.target.value;
    setFormFields((prev) => {
      return { ...prev, [key]: value };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await sendQuery(formFields);
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="px-4 py-3 bg-bg-primary text-text-primary border border-border focus:outline-accent"
          value={formFields.fullName}
          onChange={(e) => handleChange(e, "fullName")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="px-4 py-3 bg-bg-primary text-text-primary border border-border focus:outline-accent"
          value={formFields.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold">
          What do you need help with?
        </label>
        <textarea
          id="message"
          rows="5"
          required
          className="px-4 py-3 bg-bg-primary text-text-primary border border-border focus:outline-accent"
          value={formFields.query}
          onChange={(e) => handleChange(e, "query")}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-10 transition cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
