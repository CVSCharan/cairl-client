import React from 'react';
import DropdownMenu from './DropdownMenu';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
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
                onClick={onClose}
              >
                AI Bootcamps
              </a>
            </li>
            <li>
              <a
                href="#workshops"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Workshops
              </a>
            </li>
            <li>
              <a
                href="#excellence"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Center of Excellence
              </a>
            </li>
            <li>
              <a
                href="#conferences"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
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
                onClick={onClose}
              >
                Hackathons & Innovation Challenges
              </a>
            </li>
            <li>
              <a
                href="#incubators"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
              >
                Startup Incubators & Innovation Hubs
              </a>
            </li>
            <li>
              <a
                href="#collaborations"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
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
                onClick={onClose}
              >
                AI for Social Good & Rural Outreach
              </a>
            </li>
            <li>
              <a
                href="#policy"
                className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                onClick={onClose}
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
            onClick={onClose}
          >
            Register Now
          </a>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default ServicesDropdown;