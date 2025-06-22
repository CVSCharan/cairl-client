import React, { useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import type { DropdownMenuProps } from "../../types/header";

interface FocusGroupsDropdownProps extends DropdownMenuProps {}

const FocusGroupsDropdown: React.FC<FocusGroupsDropdownProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "smooth" for animation
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <DropdownMenu isOpen={isOpen} onClose={onClose}>
      <div className="p-6 w-[500px]">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Focus Groups */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Focus Groups
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/focus-groups#enterprise-ai-adoption"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  Enterprise AI Adoption
                </a>
              </li>
              <li>
                <a
                  href="/focus-groups#capacity-building"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  CAPACITY BUILDING & KNOWLEDGE MANAGEMENT
                </a>
              </li>
              <li>
                <a
                  href="/focus-groups#partner"
                  className="text-gray-600 hover:text-blue-600 text-base block py-1.5"
                  onClick={onClose}
                >
                  PARTNER WITH CAIRL
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - CTA */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">
                Together, we're building an AI-powered India.
              </h3>
              <p className="text-gray-600 text-base mb-6">Join the movement</p>
            </div>
            <button
              onClick={() => {
                window.location.href = "#register";
                onClose();
              }}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </DropdownMenu>
  );
};

export default FocusGroupsDropdown;
