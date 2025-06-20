import React from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

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
              <Link
                to="/about-us#mission"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Our Mission
              </Link>
            </li>
            <li>
              <Link
                to="/about-us#vision"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Our Vision
              </Link>
            </li>
            <li>
              <Link
                to="/about-us#objectives"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Objectives
              </Link>
            </li>
            <li>
              <Link
                to="/about-us#goals"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Goals
              </Link>
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
              <Link
                to="/about-us#strategic-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Strategic Advisor
              </Link>
            </li>
            <li>
              <Link
                to="/about-us#academic-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Academic Advisor
              </Link>
            </li>
            <li>
              <Link
                to="/about-us#industry-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Industry Advisor
              </Link>
            </li>
            <li>
              <Link
                to="/about-us#technology-advisors"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Technology Advisor
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">OUR TEAM</h3>
          <ul className="space-y-3 mb-6">
            <li>
              <Link
                to="/about-us#board-members"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Board Members & Management Team
              </Link>
            </li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            MOUs & STRATEGIC PARTNERSHIPS
          </h3>
          <ul className="space-y-3 mb-6">
            <li>
              <Link
                to="/about-us#mou"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                View All Partnerships
              </Link>
            </li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-4 text-lg">FAQs</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about-us#faqs"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default AboutDropdown;
