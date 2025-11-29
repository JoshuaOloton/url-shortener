"use client";

import { Menu, X } from "lucide-react"
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between py-6 w-5/6 m-auto">
        {/* <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} /> */}
        <img className="w-24 h-7" src="/assets/logo.svg" alt="Logo" />
        {/* Desktop Nav */}
        <ul></ul>
        {/* Toggle icon */}
        <div onClick={() => setIsOpen(state => !state)}>
          {isOpen ? (
            <X className="text-gray400 cursor-pointer" />
          ): (
            <Menu className="text-gray400 cursor-pointer" />
          )}
        </div>
      </div>
      {/* Mobile Nav */}
      <div className={`absolute text-white w-full overflow-hidden transition-all duration-300 ease ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-50"}`}>
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
