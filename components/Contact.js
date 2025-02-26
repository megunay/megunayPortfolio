// components/Contact.js
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (This is just a placeholder, backend needed for real emails)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Me</h2>

        {/* Contact Form */}
        <div className="mt-10 max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-500 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <p className="text-lg">Or connect with me on:</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              LinkedIn
            </a>
            <a href="mailto:your@email.com" className="text-blue-400 hover:text-blue-500">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
