"use client";

import { Menu, X } from "lucide-react"
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between md:justify-start md:gap-8 items-center py-6 w-5/6 max-w-7xl m-auto">
        {/* <img className="w-24 h-7" src="/assets/logo.svg" alt="Logo" /> */}
        <Image src="/assets/logo.svg" alt="Logo" width={96} height={28} className=""/>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 flex-1">
          <li className="nav-link">Features</li>
          <li className="nav-link">Pricing</li>
          <li className="nav-link mr-auto">Resources</li>
          <li className="nav-link">Login</li>
          <Button classname="rounded-3xl text-sm" size="small">Sign Up</Button>
        </ul>
        {/* Toggle icon */}
        <div className="md:hidden"
          onClick={() => setIsOpen(state => !state)}>
          {isOpen ? (
            <X className="text-gray400 cursor-pointer" />
          ): (
            <Menu className="text-gray400 cursor-pointer" />
          )}
        </div>
      </div>
      {/* Mobile Nav */}
      <div className={`fixed text-white w-full overflow-hidden transition-all duration-300 ease md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <ul className="flex flex-col items-center space-y-5 py-8 w-4/5 m-auto bg-purple950 rounded-xl">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <hr className="w-5/6" />
          <li>Login</li>
          <Button classname="rounded-3xl">Sign Up</Button>
        </ul>
      </div>
    </header>
  )
}

export default Header
