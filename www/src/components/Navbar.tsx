import React, {useState} from 'react';
import {CogIcon, MenuIcon} from "@heroicons/react/outline";

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Navbar: React.FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-mat-deep-purple-900">
        <div className="flex flex-row justify-between items-center max-w-full mx-auto px-2 sm:px-6 lg:px-8 h-16">
        <span className="flex items-center">
          <MenuIcon className="h-6 w-6 hover:text-white text-gray-400"/>
          <h1 className="m-4 hover:text-white text-lg text-gray-400 tracking-widest"> MANAGER </h1>
        </span>
          <span>
          <CogIcon className="h-6 w-6 hover:text-white text-gray-400"/>
        </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar