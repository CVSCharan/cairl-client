import React from 'react';
import DropdownMenu from './DropdownMenu';

interface AboutDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen}>
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
                onClick={onClose}
              >
                Our Mission
              </a>
            </li>
            <li>
              <a
                href="#vision"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Our Vision
              </a>
            </li>
            <li>
              <a
                href="#objectives"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Objectives
              </a>
            </li>
            <li>
              <a
                href="#goals"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
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
                onClick={onClose}
              >
                Strategic Advisor
              </a>
            </li>
            <li>
              <a
                href="#academic-advisor"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Academic Advisor
              </a>
            </li>
            <li>
              <a
                href="#industry-advisor"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Industry Advisor
              </a>
            </li>
            <li>
              <a
                href="#technology-advisor"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
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
                onClick={onClose}
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
          onClick={onClose}
        >
          MOUs & Strategic Partnerships
        </a>
        <a
          href="#faqs"
          className="text-gray-600 hover:text-blue-600 text-sm block py-1"
          onClick={onClose}
        >
          FAQs
        </a>
      </div>
    </DropdownMenu>
  );
};

export default AboutDropdown;