"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-10">
      <h2 className="text-4xl font-bold text-slate-400">Contact Me</h2>
      <p className="text-lg mt-4 text-slate-300">Feel free to reach out to me by this form!</p>

      {submitted ? (
        <p className="mt-6 text-green-400 text-xl">Thank you! Your message has been sent. 😊</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      )}
      <p className="text-lg mt-4 text-slate-300">or click on my social profiles to check out my work & contact with me.</p>
      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/merkang" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-3xl transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/megunay" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 text-3xl transition">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/mustebaerkan" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-3xl transition">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
