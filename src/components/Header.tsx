import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./header/DropdownButton";
import AboutDropdown from "./header/AboutDropdown";
import ServicesDropdown from "./header/ServicesDropdown";
import ResearchDropdown from "./header/ResearchDropdown";
import HappeningsDropdown from "./header/HappeningsDropdown";
import FocusGroupsDropdown from "./header/FocusGroupsDropdown";
import ResourcesDropdown from "./header/ResourcesDropdown";
import MobileMenu from "./header/MobileMenu";

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
        setIsMobileMenuOpen(false);
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
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-0" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-3 lg:px-4">
        <div
          className={`bg-white rounded-full shadow-sm py-3 px-6 flex items-center justify-between ${
            isScrolled ? "border border-gray-100" : "shadow-md"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <Link
              to="/"
              className="flex items-center"
              onClick={closeAllDropdowns}
            >
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                alt="CAiRL"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center w-full">
            {/* About us Dropdown */}
            <div className="relative">
              <DropdownButton
                onClick={() => handleDropdownToggle("about")}
                isActive={activeDropdown === "about"}
              >
                About us
              </DropdownButton>
              <AboutDropdown
                isOpen={activeDropdown === "about"}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <DropdownButton
                onClick={() => handleDropdownToggle("services")}
                isActive={activeDropdown === "services"}
              >
                Services
              </DropdownButton>
              <ServicesDropdown
                isOpen={activeDropdown === "services"}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Research & Innovation Dropdown */}
            <div className="relative">
              <DropdownButton
                onClick={() => handleDropdownToggle("research")}
                isActive={activeDropdown === "research"}
              >
                Research & Innovation
              </DropdownButton>
              <ResearchDropdown
                isOpen={activeDropdown === "research"}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Happenings Dropdown */}
            <div className="relative">
              <DropdownButton
                onClick={() => handleDropdownToggle("happenings")}
                isActive={activeDropdown === "happenings"}
              >
                Happenings
              </DropdownButton>
              <HappeningsDropdown
                isOpen={activeDropdown === "happenings"}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Focus Groups Dropdown */}
            <div className="relative">
              <DropdownButton
                onClick={() => handleDropdownToggle("focus-groups")}
                isActive={activeDropdown === "focus-groups"}
              >
                Focus Groups
              </DropdownButton>
              <FocusGroupsDropdown
                children={undefined}
                isOpen={activeDropdown === "focus-groups"}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <DropdownButton
                onClick={() => handleDropdownToggle("resources")}
                isActive={activeDropdown === "resources"}
              >
                Resources
              </DropdownButton>
              <ResourcesDropdown
                children={undefined}
                isOpen={activeDropdown === "resources"}
                onClose={closeAllDropdowns}
              />
            </div>

            {/* Contact */}
            <Link
              to="/contact-us"
              className="px-3 py-2 text-sm font-medium rounded-full flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:no-underline cursor-pointer"
              onClick={closeAllDropdowns}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              to="/engage-with-us"
              className="bg-[#005BA9] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
              onClick={closeAllDropdowns}
            >
              Engage with us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        onDropdownToggle={handleDropdownToggle}
        onClose={closeAllDropdowns}
      />
    </header>
  );
};

export default Header;
