import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-transparent mt-16 mb-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <a
          href="#about-us"
          className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full"
        >
          Contact
        </a>
        <div className="flex justify-between items-center mb-4 mt-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Connect with us
            </h2>
            <p className="text-sm text-gray-900">
              Have questions, ideas, or just want to connect?
            </p>
          </div>
          <a
            href="#all-events"
            className="bg-[#005BA9] text-white hover:text-white px-4 py-2 rounded-full font-medium flex items-center"
          >
            Know more
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-blue-600 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-700 mb-1">+91-9391335191</p>
            <p className="text-gray-500 text-sm">
              Monday - Friday, 09:00 AM - 06:00PM
            </p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-blue-600 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700 mb-1">info@cairl.org</p>
            <p className="text-gray-500 text-sm">
              We'll respond as soon as possible
            </p>
          </div>

          {/* Location */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-blue-600 w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700 mb-1">
              T-Hub, 2.0, Inorbit Mall Rd,
              <br />
              Vittal Rao Nagar, Madhapur,
              <br />
              Hyderabad, Telangana 500081
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
