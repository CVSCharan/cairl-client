import React from "react";
import type { DropdownButtonProps } from "../../types/header";

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 text-sm font-medium rounded-full flex items-center ${
        isActive
          ? "text-blue-600 bg-blue-50"
          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
      }`}
    >
      <span>{children}</span>
      <svg
        className={`w-4 h-4 ml-1 transition-transform ${
          isActive ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

export default DropdownButton;
