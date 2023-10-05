import React from "react";

export default function Navbar() {
  return (
    <nav className="h-[100px] max-w-[1588px] px-4 w-full flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img src="/navbar/logo.png" alt="logotipo" />
        <h1 className="text-white font-bold text-lg">Crypton</h1>
      </div>

      <ul className="flex gap-10 items-center max-[1280px]:hidden">
        <li className="font-medium text-white">Home</li>
        <li className="font-medium text-white/50">About</li>
        <li className="font-medium text-white/50">Services</li>
        <li className="font-medium text-white/50">Events</li>
        <li className="ml-5 border w-[145px] h-[50px] flex items-center justify-center text-white">Sign In</li>
      </ul>
    </nav>
  );
}
