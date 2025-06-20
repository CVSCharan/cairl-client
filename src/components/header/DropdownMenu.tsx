import React from "react";
import type { DropdownMenuProps } from "../../types/header";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-[50vw] flex justify-center bg-white rounded-lg shadow-lg border border-gray-100 py-4 px-6 animate-fadeIn">
      {children}
    </div>
  );
};

export default DropdownMenu;
