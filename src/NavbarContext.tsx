import React, { createContext, useContext, useState } from "react";
interface NavbarContextType {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

import { ReactNode } from "react";

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <NavbarContext.Provider value={{ isOpen, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
