import React from "react";
import DropdownMenu from "./DropdownMenu";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-3 gap-8 p-6">
        {/* Column 1 - CAPACITY BUILDING & KNOWLEDGE EMPOWERMENT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            CAPACITY BUILDING & KNOWLEDGE EMPOWERMENT
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/services#knowledge-empowerment"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                AI Bootcamps
              </a>
            </li>
            <li>
              <a
                href="/services#knowledge-empowerment"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Workshops
              </a>
            </li>
            <li>
              <a
                href="/services#knowledge-empowerment"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Center of Excellence
              </a>
            </li>
            <li>
              <a
                href="/services#knowledge-empowerment"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                AI Tech Conference & Summits
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - INNOVATION & STARTUP SUPPORT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            INNOVATION & STARTUP SUPPORT
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/services#knowledge-empowerment"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Hackathons & Innovation Challenges
              </a>
            </li>
            <li>
              <a
                href="/services#innovation"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Startup Incubators & Innovation Hubs
              </a>
            </li>
            <li>
              <a
                href="/services#innovation"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Joint Research Collaborations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - ECOSYSTEM BUILDING & SOCIAL IMPACT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            ECOSYSTEM BUILDING & SOCIAL IMPACT
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/services#eco-system"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                AI for Social Good & Rural Outreach
              </a>
            </li>
            <li>
              <a
                href="#/services#eco-system"
                className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                onClick={onClose}
              >
                Liaising & Policy Engagement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
