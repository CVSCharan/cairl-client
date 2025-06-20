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
      <div className="p-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 text-xs mb-3">
              KNOWLEDGE HUB
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#blog"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#podcast"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#whitepaper"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-xs mb-3">
              AI USE CASES
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#datasets"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  DATASETS FOR INNOVATION
                </a>
              </li>
              <li>
                <a
                  href="#computing"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  AFFORDABLE AI COMPUTING
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default ResourcesDropdown;
