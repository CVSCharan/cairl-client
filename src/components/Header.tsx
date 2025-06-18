import React, { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  // Mobile dropdown toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-0" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-white rounded-full shadow-sm py-3 px-6 flex items-center justify-between ${
            isScrolled ? "border border-gray-100" : "shadow-md"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center"
              onClick={closeAllDropdowns}
            >
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                alt="CAiRL Logo"
                className="h-8"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 w-full">
            {/* About us Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("about")}
                className={`px-3 py-2 text-sm font-medium rounded-full flex items-center ${
                  activeDropdown === "about"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>About us</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        WHO WE ARE
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#mission"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Our Mission
                          </a>
                        </li>
                        <li>
                          <a
                            href="#vision"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Our Vision
                          </a>
                        </li>
                        <li>
                          <a
                            href="#objectives"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Objectives
                          </a>
                        </li>
                        <li>
                          <a
                            href="#goals"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Goals
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        ADVISORY TEAM
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#strategic-advisor"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Strategic Advisor
                          </a>
                        </li>
                        <li>
                          <a
                            href="#academic-advisor"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Academic Advisor
                          </a>
                        </li>
                        <li>
                          <a
                            href="#industry-advisor"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Industry Advisor
                          </a>
                        </li>
                        <li>
                          <a
                            href="#technology-advisor"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Technology Advisor
                          </a>
                        </li>
                      </ul>
                      <h3 className="font-semibold text-gray-900 mb-3 mt-4">
                        OUR TEAM
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#board-members"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Board Members & Management Team
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href="#mou"
                      className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                      onClick={closeAllDropdowns}
                    >
                      MOUs & Strategic Partnerships
                    </a>
                    <a
                      href="#faqs"
                      className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                      onClick={closeAllDropdowns}
                    >
                      FAQs
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("services")}
                className={`px-3 py-2 text-sm font-medium rounded-full flex items-center ${
                  activeDropdown === "services"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        CAPACITY BUILDING
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#bootcamps"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            AI Bootcamps
                          </a>
                        </li>
                        <li>
                          <a
                            href="#workshops"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Workshops
                          </a>
                        </li>
                        <li>
                          <a
                            href="#excellence"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Center of Excellence
                          </a>
                        </li>
                        <li>
                          <a
                            href="#conferences"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            AI Tech Conference & Summits
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        INNOVATION & STARTUP SUPPORT
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#hackathons"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Hackathons & Innovation Challenges
                          </a>
                        </li>
                        <li>
                          <a
                            href="#incubators"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Startup Incubators & Innovation Hubs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#collaborations"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Joint Research Collaborations
                          </a>
                        </li>
                      </ul>
                      <h3 className="font-semibold text-gray-900 mb-3 mt-4">
                        ECOSYSTEM BUILDING
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#social-good"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            AI for Social Good & Rural Outreach
                          </a>
                        </li>
                        <li>
                          <a
                            href="#policy"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Liaising & Policy Engagement
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Together, we're building an AI-powered India.
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Join the movement
                      </p>
                      <a
                        href="#register"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 inline-block"
                        onClick={closeAllDropdowns}
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Research & Innovation Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("research")}
                className={`px-3 py-2 text-sm font-medium rounded-full flex items-center ${
                  activeDropdown === "research"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>Research</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === "research" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "research" && (
                <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    RESEARCH & INNOVATION
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#ai-research"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        AI Research & Thought Leadership
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ai-education"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        AI Education & Skill Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#ecosystem"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        AI Ecosystem Building & Partnerships
                      </a>
                    </li>
                    <li>
                      <a
                        href="#hackathons-innovation"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        AI Hackathons & Innovation Challenges
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sustainability"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        AI for Social Good & Sustainability
                      </a>
                    </li>
                    <li>
                      <a
                        href="#mentorship"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        AI Mentorship & Startup Support
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Happenings Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("happenings")}
                className={`px-3 py-2 text-sm font-medium rounded-full flex items-center ${
                  activeDropdown === "happenings"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>Happenings</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === "happenings" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "happenings" && (
                <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    HAPPENINGS
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#events"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#webinars"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        Webinars
                      </a>
                    </li>
                    <li>
                      <a
                        href="#visual-journey"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        Visual Journey
                      </a>
                    </li>
                  </ul>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      UPCOMING EVENTS
                    </h3>
                    <div className="bg-gray-100 rounded-lg w-full h-40 mb-3"></div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Join us for the training days of sending, collaboration,
                      and innovation!
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Monday, 15 April 2025
                    </p>
                    <p className="text-xs text-gray-500">09:00 AM - 01:00 PM</p>
                    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-700">
                      Submit
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      UPCOMING WEBINAR
                    </h3>
                    <div className="bg-gray-100 rounded-lg w-full h-40 mb-3"></div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Join us for the training day of using webinar info with
                      innovation!
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Monday, 15 April 2025
                    </p>
                    <p className="text-xs text-gray-500">09:00 AM - 01:00 PM</p>
                  </div>
                </div>
              )}
            </div>

            {/* Focus Groups Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("focus-groups")}
                className={`px-3 py-2 text-sm font-medium rounded-full flex items-center ${
                  activeDropdown === "focus-groups"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>Focus Groups</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === "focus-groups" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "focus-groups" && (
                <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    ENTERPRISE AI ADOPTION
                  </h3>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <a
                        href="#capacity-building"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        CAPACITY BUILDING & KNOWLEDGE MANAGEMENT
                      </a>
                    </li>
                    <li>
                      <a
                        href="#partner"
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        onClick={closeAllDropdowns}
                      >
                        PARTNER WITH CAIRL
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("resources")}
                className={`px-3 py-2 text-sm font-medium rounded-full flex items-center ${
                  activeDropdown === "resources"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <span>Resources</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === "resources" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        KNOWLEDGE HUB
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#blog"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#podcast"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Podcast
                          </a>
                        </li>
                        <li>
                          <a
                            href="#whitepaper"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            Whitepaper
                          </a>
                        </li>
                      </ul>
                      <h3 className="font-semibold text-gray-900 mb-3 mt-4">
                        AI USE CASES
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#datasets"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            DATASETS FOR INNOVATION
                          </a>
                        </li>
                        <li>
                          <a
                            href="#computing"
                            className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                            onClick={closeAllDropdowns}
                          >
                            AFFORDABLE AI COMPUTING
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        BLOGS
                      </h3>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 w-full h-16 rounded mb-2"></div>
                          <h4 className="text-xs font-medium text-gray-900 line-clamp-2">
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Tony Stark • August 20, 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        PODCASTS
                      </h3>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 w-full h-16 rounded mb-2"></div>
                          <h4 className="text-xs font-medium text-gray-900 line-clamp-2">
                            Everyday is Chance to Learn New Thing
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            MIKE LOUIS • AI STARTUP
                          </p>
                          <p className="text-xs text-gray-500">
                            Why the episode • 60 min
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        WHITEPAPERS
                      </h3>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 w-full h-16 rounded mb-2"></div>
                          <h4 className="text-xs font-medium text-gray-900 line-clamp-2">
                            Towards University Ethical AI
                          </h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            A comprehensive ethical AI framework for
                            universities and the challenges they face
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              Education
                            </span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              Research
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="#contact"
              className="px-3 py-2 text-sm font-medium rounded-full text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={closeAllDropdowns}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block ml-4">
            <a
              href="#contact"
              className="bg-[#005BA9] text-white hover:text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
              onClick={closeAllDropdowns}
            >
              Engage with us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen mt-2" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-about")}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              >
                <span>About us</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    activeDropdown === "mobile-about" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-about" && (
                <div className="pl-4 mt-2 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2">
                      WHO WE ARE
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#mission"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Our Mission
                        </a>
                      </li>
                      <li>
                        <a
                          href="#vision"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Our Vision
                        </a>
                      </li>
                      <li>
                        <a
                          href="#objectives"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Objectives
                        </a>
                      </li>
                      <li>
                        <a
                          href="#goals"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Goals
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2">
                      ADVISORY TEAM
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#strategic-advisor"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Strategic Advisor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#academic-advisor"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Academic Advisor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#industry-advisor"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Industry Advisor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#technology-advisor"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Technology Advisor
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2 mt-3">
                      OUR TEAM
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#board-members"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Board Members & Management Team
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <a
                      href="#mou"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={closeAllDropdowns}
                    >
                      MOUs & Strategic Partnerships
                    </a>
                    <a
                      href="#faqs"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={closeAllDropdowns}
                    >
                      FAQs
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-services")}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    activeDropdown === "mobile-services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-services" && (
                <div className="pl-4 mt-2 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2">
                      CAPACITY BUILDING
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#bootcamps"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          AI Bootcamps
                        </a>
                      </li>
                      <li>
                        <a
                          href="#workshops"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Workshops
                        </a>
                      </li>
                      <li>
                        <a
                          href="#excellence"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Center of Excellence
                        </a>
                      </li>
                      <li>
                        <a
                          href="#conferences"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          AI Tech Conference & Summits
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2">
                      INNOVATION & STARTUP SUPPORT
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#hackathons"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Hackathons & Innovation Challenges
                        </a>
                      </li>
                      <li>
                        <a
                          href="#incubators"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Startup Incubators & Innovation Hubs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#collaborations"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Joint Research Collaborations
                        </a>
                      </li>
                    </ul>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2 mt-3">
                      ECOSYSTEM BUILDING
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#social-good"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          AI for Social Good & Rural Outreach
                        </a>
                      </li>
                      <li>
                        <a
                          href="#policy"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Liaising & Policy Engagement
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Research Dropdown */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-research")}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              >
                <span>Research & Innovation</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    activeDropdown === "mobile-research" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-research" && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="#ai-research"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    AI Research & Thought Leadership
                  </a>
                  <a
                    href="#ai-education"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    AI Education & Skill Development
                  </a>
                  <a
                    href="#ecosystem"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    AI Ecosystem Building & Partnerships
                  </a>
                  <a
                    href="#hackathons-innovation"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    AI Hackathons & Innovation Challenges
                  </a>
                  <a
                    href="#sustainability"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    AI for Social Good & Sustainability
                  </a>
                  <a
                    href="#mentorship"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    AI Mentorship & Startup Support
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Happenings Dropdown */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-happenings")}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              >
                <span>Happenings</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    activeDropdown === "mobile-happenings" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-happenings" && (
                <div className="pl-4 mt-2 space-y-3">
                  <h3 className="font-semibold text-gray-900 text-xs mb-2">
                    HAPPENINGS
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#events"
                        className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                        onClick={closeAllDropdowns}
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#webinars"
                        className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                        onClick={closeAllDropdowns}
                      >
                        Webinars
                      </a>
                    </li>
                    <li>
                      <a
                        href="#visual-journey"
                        className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                        onClick={closeAllDropdowns}
                      >
                        Visual Journey
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Focus Groups Dropdown */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-focus-groups")}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              >
                <span>Focus Groups</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    activeDropdown === "mobile-focus-groups" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-focus-groups" && (
                <div className="pl-4 mt-2 space-y-2">
                  <h3 className="font-semibold text-gray-900 text-xs mb-2">
                    ENTERPRISE AI ADOPTION
                  </h3>
                  <a
                    href="#capacity-building"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    CAPACITY BUILDING & KNOWLEDGE MANAGEMENT
                  </a>
                  <a
                    href="#partner"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={closeAllDropdowns}
                  >
                    PARTNER WITH CAIRL
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={() => handleDropdownToggle("mobile-resources")}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              >
                <span>Resources</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    activeDropdown === "mobile-resources" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "mobile-resources" && (
                <div className="pl-4 mt-2 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2">
                      KNOWLEDGE HUB
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#blog"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#podcast"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Podcast
                        </a>
                      </li>
                      <li>
                        <a
                          href="#whitepaper"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          Whitepaper
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-xs mb-2">
                      AI USE CASES
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#datasets"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          DATASETS FOR INNOVATION
                        </a>
                      </li>
                      <li>
                        <a
                          href="#computing"
                          className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                          onClick={closeAllDropdowns}
                        >
                          AFFORDABLE AI COMPUTING
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Contact */}
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
              onClick={closeAllDropdowns}
            >
              Contact
            </a>

            {/* CTA Button - Mobile */}
            <a
              href="#contact"
              className="block bg-[#005BA9] text-white text-center px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors mt-4"
              onClick={closeAllDropdowns}
            >
              Engage with us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
