import React from "react";
import type { MobileMenuProps } from "../../types/header";
import { Link } from "react-router-dom";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden px-2">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
        {/* Mobile About Dropdown */}
        <div>
          <button
            onClick={() => onDropdownToggle("mobile-about")}
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
                      href="#about"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      About CAiRL
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mission"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Mission & Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="#values"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Our Values
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
                      href="/about-us#strategic-advisors"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Strategic Advisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us#academic-advisor"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Academic Advisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us#industry-advisors"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Industry Advisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us#technology-advisors"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Technology Advisor
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
                      href="/about-us#strategic-advisors"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Strategic Advisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us#academic-advisor"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Academic Advisor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Services Dropdown */}
        <div>
          <button
            onClick={() => onDropdownToggle("mobile-services")}
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
                      onClick={onClose}
                    >
                      AI Bootcamps
                    </a>
                  </li>
                  <li>
                    <a
                      href="#workshops"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a
                      href="#excellence"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Center of Excellence
                    </a>
                  </li>
                  <li>
                    <a
                      href="#conferences"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
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
                      onClick={onClose}
                    >
                      Hackathons & Innovation Challenges
                    </a>
                  </li>
                  <li>
                    <a
                      href="#incubators"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Startup Incubators & Innovation Hubs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#collaborations"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
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
                      onClick={onClose}
                    >
                      AI for Social Good & Rural Outreach
                    </a>
                  </li>
                  <li>
                    <a
                      href="#policy"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
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
            onClick={() => onDropdownToggle("mobile-research")}
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
                onClick={onClose}
              >
                AI Research & Thought Leadership
              </a>
              <a
                href="#ai-education"
                className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                onClick={onClose}
              >
                AI Education & Skill Development
              </a>
              <a
                href="#ecosystem"
                className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                onClick={onClose}
              >
                AI Ecosystem Building & Partnerships
              </a>
              <a
                href="#hackathons-innovation"
                className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                onClick={onClose}
              >
                AI Hackathons & Innovation Challenges
              </a>
              <a
                href="#sustainability"
                className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                onClick={onClose}
              >
                AI for Social Good & Sustainability
              </a>
              <a
                href="#mentorship"
                className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                onClick={onClose}
              >
                AI Mentorship & Startup Support
              </a>
            </div>
          )}
        </div>

        {/* Mobile Happenings Dropdown */}
        <div>
          <button
            onClick={() => onDropdownToggle("mobile-happenings")}
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
                    onClick={onClose}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#webinars"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={onClose}
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#visual-journey"
                    className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                    onClick={onClose}
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
            onClick={() => onDropdownToggle("mobile-focus-groups")}
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
                onClick={onClose}
              >
                CAPACITY BUILDING & KNOWLEDGE MANAGEMENT
              </a>
              <a
                href="#partner"
                className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                onClick={onClose}
              >
                PARTNER WITH CAIRL
              </a>
            </div>
          )}
        </div>

        {/* Mobile Resources Dropdown */}
        <div>
          <button
            onClick={() => onDropdownToggle("mobile-resources")}
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
                      onClick={onClose}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#podcast"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
                    >
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="#whitepaper"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
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
                      onClick={onClose}
                    >
                      DATASETS FOR INNOVATION
                    </a>
                  </li>
                  <li>
                    <a
                      href="#computing"
                      className="text-gray-600 hover:text-blue-600 text-xs block py-1"
                      onClick={onClose}
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
        <Link
          to="/contact-us"
          className="block text-gray-700 hover:text-blue-600 text-sm font-medium py-2"
          onClick={onClose}
        >
          Contact
        </Link>

        {/* CTA Button - Mobile */}
        <Link
          to="/engage-with-us"
          className="block bg-[#005BA9] text-white text-center px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors mt-4"
          onClick={onClose}
        >
          Engage with us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
