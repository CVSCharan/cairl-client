import React from "react";
import DropdownMenu from "./DropdownMenu";
import type { DropdownMenuProps } from "../../types/header";

interface FocusGroupsDropdownProps extends DropdownMenuProps {}

const FocusGroupsDropdown: React.FC<FocusGroupsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 text-xs mb-3">
              ENTERPRISE AI ADOPTION
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#capacity-building"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  CAPACITY BUILDING & KNOWLEDGE MANAGEMENT
                </a>
              </li>
              <li>
                <a
                  href="#partner"
                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  onClick={onClose}
                >
                  PARTNER WITH CAIRL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default FocusGroupsDropdown;
