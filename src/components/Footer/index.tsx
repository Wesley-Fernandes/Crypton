import Link from "next/link";
import React from "react";
import Jumper from "./Jumper";
import FooterTop from "./FooterTop.component";
import FooterBottom from "./FooterBottom.component";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-56">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
