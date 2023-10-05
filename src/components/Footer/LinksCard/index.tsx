import React from "react";

interface props {
  title: string;
  links: string[];
}
export default function LinksCard({ links, title }: props) {
  return (
    <div className="h-fit w-[216px]">
      <h2 className="text-[#C23893] font-bold mb-3 capitalize">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((link) => {
          return (
            <li key={link} className="font-bold capitalize">
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
