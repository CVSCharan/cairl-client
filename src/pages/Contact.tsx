import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    linkedin: "",
    engagement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      linkedin: "",
      engagement: "",
      message: "",
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#F6F6F6]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 pt-28">
        {/* Background Element - Now covers header to form */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750188690/Element_hvtzp4.png"
            alt="Background Element"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          />
        </div>
        {/* Contact Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
            Contact
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us for collaboration, inquiries, or to learn more about
            our AI initiatives.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-16 max-w-4xl mx-auto relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ACME"
                />
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  LinkedIn Profile
                </label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="linkedin.com/in/..."
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="engagement"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Type of Engagement*
              </label>
              <div className="relative">
                <select
                  id="engagement"
                  name="engagement"
                  value={formData.engagement}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  <option value="" disabled>
                    Select One
                  </option>
                  <option value="collaboration">Collaboration</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us briefly about your interest"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card Template */}
          {[
            {
              icon: <FaPhone className="text-white" />,
              title: "Phone",
              value: "+91-9391335191",
              link: "tel:+919391335191",
              subtitle: "Monday - Friday, 09:00 AM - 06:00PM",
            },
            {
              icon: <FaEnvelope className="text-white" />,
              title: "Email",
              value: "info@cairl.org",
              link: "mailto:info@cairl.org",
              subtitle: "We'll respond as soon as possible",
            },
            {
              icon: <FaMapMarkerAlt className="text-white" />,
              title: "Location",
              value: "T-Hub, 2.0, Inorbit Mall Rd, Hyderabad, Telangana, India",
              subtitle: "IIIT-H Foundation",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-start gap-4"
            >
              <div className="w-12 h-12 min-w-12 flex items-center justify-center bg-[#005BA9] rounded-full">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-[#005BA9] hover:underline block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
                {item.subtitle && (
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2954088332393!2d78.34766491487767!3d17.445146988040436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sT-Hub%202.0!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CAiRL Location"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
