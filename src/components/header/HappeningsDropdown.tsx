import React from "react";
import DropdownMenu from "./DropdownMenu";

interface HappeningsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const HappeningsDropdown: React.FC<HappeningsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="p-6 w-[800px]">
        {/* Main Happenings Menu */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Happenings Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              HAPPENINGS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#events"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#webinars"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#visual-journey"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Visual Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Column - Upcoming Event */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              UPCOMING EVENT
            </h3>
            <div className="bg-gray-100 rounded-lg w-full h-48 mb-4 flex items-center justify-center">
              <span className="text-gray-400">Event Image</span>
            </div>
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Join us for an exciting day of coding, collaboration, and
              innovation!
            </h4>
            <p className="text-sm text-gray-500 mb-1">Monday, 15 April 2025</p>
            <p className="text-sm text-gray-500 mb-3">09:00 AM - 01:00 PM</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Register
            </button>
          </div>

          {/* Right Column - Upcoming Webinar */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              UPCOMING WEBINAR
            </h3>
            <div className="bg-gray-100 rounded-lg w-full h-48 mb-4 flex items-center justify-center">
              <span className="text-gray-400">Webinar Image</span>
            </div>
            <h4 className="text-base font-medium text-gray-900 mb-2">
              Join us for an exciting day of coding, collaboration, and
              innovation!
            </h4>
            <p className="text-sm text-gray-500 mb-1">Monday, 15 April 2025</p>
            <p className="text-sm text-gray-500 mb-3">09:00 AM - 01:00 PM</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default HappeningsDropdown;
