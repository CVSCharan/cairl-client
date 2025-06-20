import React from "react";
import DropdownMenu from "./DropdownMenu";

interface AboutDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-3 gap-8 p-6">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            WHO WE ARE
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/about-us#mission"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Our Mission
              </a>
            </li>
            <li>
              <a
                href="/about-us#vision"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Our Vision
              </a>
            </li>
            <li>
              <a
                href="/about-us#objectives"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Objectives
              </a>
            </li>
            <li>
              <a
                href="/about-us#goals"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Goals
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            ADVISORY TEAM
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/about-us#strategic-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Strategic Advisor
              </a>
            </li>
            <li>
              <a
                href="/about-us#academic-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Academic Advisor
              </a>
            </li>
            <li>
              <a
                href="/about-us#industry-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Industry Advisor
              </a>
            </li>
            <li>
              <a
                href="/about-us#technology-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Technology Advisor
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">OUR TEAM</h3>
          <ul className="space-y-3 mb-6">
            <li>
              <a
                href="/about-us#board-members"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Board Members & Management Team
              </a>
            </li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            MOUs & STRATEGIC PARTNERSHIPS
          </h3>
          <ul className="space-y-3 mb-6">
            <li>
              <a
                href="/about-us#mou"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                View All Partnerships
              </a>
            </li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-4 text-lg">FAQs</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/about-us#faqs"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default AboutDropdown;
