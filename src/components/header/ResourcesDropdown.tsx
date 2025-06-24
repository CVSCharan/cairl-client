import React from "react";
import DropdownMenu from "./DropdownMenu";
import type { DropdownMenuProps } from "../../types/header";

interface ResourcesDropdownProps extends DropdownMenuProps {}

const ResourcesDropdown: React.FC<ResourcesDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="p-6 w-[800px]">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1 - Knowledge Hub */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-4">
              KNOWLEDGE HUB
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blogs"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/podcasts"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  href="/white-papers"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Whitepapers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - AI Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg mb-4">
              AI USE CASES & IMPLEMENTATION
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/resources#datasets"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Datasets for Innovation
                </a>
              </li>
              <li>
                <a
                  href="/resources#affordable-ai-computing"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Affordable AI Computing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Featured Content */}
          <div className="space-y-6">
            {/* Blog Section */}
            <div>
              <h4 className="font-semibold text-gray-900 text-base mb-3">
                BLOGS
              </h4>
              <div className="border-l-2 border-blue-500 pl-4">
                <h5 className="font-medium text-gray-900 mb-1">Technology</h5>
                <p className="text-gray-600 text-sm mb-1">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </p>
                <p className="text-gray-400 text-xs">
                  Energy Mission • August 16, 2022
                </p>
              </div>
            </div>

            {/* Podcast Section */}
            <div>
              <h4 className="font-semibold text-gray-900 text-base mb-3">
                PODCASTS
              </h4>
              <div className="border-l-2 border-blue-500 pl-4">
                <h5 className="font-medium text-gray-900 mb-1">
                  MX E.V.™ - AI STARTUP
                </h5>
                <p className="text-gray-600 text-sm mb-1">
                  Emerging In Chinese to Learn New Things
                </p>
                <p className="text-gray-400 text-xs">
                  From the principles of climate, coordination and planning to
                  thrive according to mind
                </p>
                <p className="text-gray-400 text-xs">
                  From this opinion (0 min)
                </p>
              </div>
            </div>

            {/* Whitepaper Section */}
            <div>
              <h4 className="font-semibold text-gray-900 text-base mb-3">
                WHITEPAPERS
              </h4>
              <div className="border-l-2 border-blue-500 pl-4">
                <h5 className="font-medium text-gray-900 mb-1">Wiki User</h5>
                <p className="text-gray-600 text-sm mb-1">
                  Towards University Ethical AI
                </p>
                <p className="text-gray-400 text-xs">
                  A comprehensive and innovative survey of business areas
                  including the focus of innovation and resilience in the world
                </p>
                <p className="text-gray-400 text-xs">
                  Community (GREEN) / Community (GOAL)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default ResourcesDropdown;
