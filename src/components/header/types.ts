export interface DropdownItem {
  href: string;
  label: string;
  onClick?: () => void;
}

export interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

export interface DropdownButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface NavigationItem {
  id: string;
  label: string;
  component: React.ComponentType<{ isOpen: boolean; onClose: () => void }>;
}