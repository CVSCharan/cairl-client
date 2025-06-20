import React from 'react';
import DropdownMenu from './DropdownMenu';

interface HappeningsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const HappeningsDropdown: React.FC<HappeningsDropdownProps> = ({ isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">
          HAPPENINGS
        </h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#events"
              className="text-gray-600 hover:text-blue-600 text-sm block py-1"
              onClick={onClose}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#webinars"
              className="text-gray-600 hover:text-blue-600 text-sm block py-1"
              onClick={onClose}
            >
              Webinars
            </a>
          </li>
          <li>
            <a
              href="#visual-journey"
              className="text-gray-600 hover:text-blue-600 text-sm block py-1"
              onClick={onClose}
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
    </DropdownMenu>
  );
};

export default HappeningsDropdown;