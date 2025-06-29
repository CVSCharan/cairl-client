import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat py-12 text-white rounded-t-[30px]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176571/footer-bg-img_ogqwyc.png)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo, Tagline and Newsletter */}
          <div className="md:col-span-4">
            <div className="flex flex-col space-y-4">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png"
                  alt="CAiRL Logo"
                  className="h-[100px] w-[100px]"
                />
              </Link>
              <p className="text-sm text-white/80">
                Subscribe to our newsletter or follow us online to stay ahead in
                AI.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/cairl.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/cairl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/cairl_org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-transparent border-b border-white/50 text-white placeholder-white/70 py-2 px-3 w-full focus:outline-none focus:border-white"
                />
                <button className="ml-2 bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-white/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Events & News */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Events & News</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/events"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/happenings"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Happenings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/webinars"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#faqs"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Us Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#team"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#mission"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#mou"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      MOUs & Partnerships
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/visual-journey"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Visual Journey
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Programs & Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Programs & Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/services"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ai-bootcamps"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      AI Bootcamps
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/focus-groups"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Focus Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research-innovation"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Research & Innovation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Contact Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/engage-with-us"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Engage With Us
                    </Link>
                  </li>
                  <li className="text-white/80">
                    <span className="font-medium">Phone:</span> +91 9391335191
                  </li>
                  <li className="text-white/80">
                    <span className="font-medium">Email:</span> info@cairl.org
                  </li>
                  <li className="text-white/80">
                    <span className="text-lg font-semibold mb-4">Address:</span>
                    <p className="mt-1 text-white/80">
                      T-Hub, 2.0, Inorbit Mall Rd,
                      <br />
                      Vittal Rao Nagar, Madhapur,
                      <br />
                      Hyderabad, Telangana 500081
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyrights Links */}
        <div className="mt-10 pt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full flex justify-center items-center mb-4 md:mb-0">
              <p className="text-sm text-white/70">
                Copyright © {new Date().getFullYear()} CAiRL. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
