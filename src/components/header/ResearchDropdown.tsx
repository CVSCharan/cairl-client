import React from "react";
import DropdownMenu from "./DropdownMenu";

interface ResearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResearchDropdown: React.FC<ResearchDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="p-6 w-full">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">
          RESEARCH & INNOVATION
        </h3>
        <ul className="space-y-3">
          <li>
            <a
              href="/research-innovation#leadership"
              className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
              onClick={onClose}
            >
              AI Research & Thought Leadership
            </a>
          </li>
          <li>
            <a
              href="/research-innovation#skill-development"
              className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
              onClick={onClose}
            >
              AI Education & Skill Development
            </a>
          </li>
          <li>
            <a
              href="/research-innovation#patnerships"
              className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
              onClick={onClose}
            >
              AI Ecosystem Building & Partnerships
            </a>
          </li>
          <li>
            <a
              href="/research-innovation#hackathons"
              className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
              onClick={onClose}
            >
              AI Hackathons & Innovation Challenges
            </a>
          </li>
          <li>
            <a
              href="/research-innovation#sustainability"
              className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
              onClick={onClose}
            >
              AI for Social Good & Sustainability
            </a>
          </li>
          <li>
            <a
              href="/research-innovation#mentorship"
              className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
              onClick={onClose}
            >
              AI Mentorship & Startup Support
            </a>
          </li>
        </ul>
      </div>
    </DropdownMenu>
  );
};

export default ResearchDropdown;
