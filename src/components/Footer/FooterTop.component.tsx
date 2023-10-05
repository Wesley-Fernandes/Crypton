import React from "react";
import LinksCard from "./LinksCard";

export default function FooterTop() {
  const product = [
    "overtime",
    "Features",
    "Soluctions",
    "Tutorials",
    "Pricing",
    "Realises",
  ];

  const company = [
    "about us",
    "Carrers",
    "Press",
    "News",
    "Media kit",
    "Contact",
  ];
  const resources = [
    "Blog",
    "Newsletter",
    "Events",
    "Help centre",
    "Tutorials",
    "Support",
  ];

  const social = [
    "Twitter",
    "Linkedin",
    "Facebook",
    "Github",
    "AngelList",
    "Dribble",
  ];

  const legal = [
    "Terms",
    "Privacy",
    "Cookies",
    "Licenses",
    "Settings",
    "Contact",
  ];
  return (
    <div className="h-[353px] bg-white flex items-center justify-center px-14">
      <div className=" flex max-w-[1066px] justify-evenly ">
        <LinksCard title="Product" links={product} />
        <LinksCard title="company" links={company} />
        <LinksCard title="resources" links={resources} />
        <LinksCard title="social" links={social} />
        <LinksCard title="legal" links={legal} />
      </div>
    </div>
  );
}
