import React from "react";
import type { DropdownMenuProps } from "../../types/header";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[calc(100vw-2rem)] max-w-7xl flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn z-50">
      {children}
    </div>
  );
};

export default DropdownMenu;
