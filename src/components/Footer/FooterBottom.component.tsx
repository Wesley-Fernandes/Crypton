import React from "react";
import Jumper from "./Jumper";

export default function FooterBottom() {
  return (
    <div className="h-[120px] bg-[#C23893] w-full flex items-center px-14 justify-between">
      <span className="text-white">
        © 2077 Untitled UI. All rights reserved.
      </span>
      <div className="flex gap-6">
        <Jumper image="/Footer/twitter.png" url="/" key="1" />
        <Jumper image="/Footer/linkedin.png" url="/" key="2" />
        <Jumper image="/Footer/facebook.png" url="/" key="3" />
        <Jumper image="/Footer/hand.png" url="/" key="4" />
        <Jumper image="/Footer/behance.png" url="/" key="5" />
      </div>
    </div>
  );
}
