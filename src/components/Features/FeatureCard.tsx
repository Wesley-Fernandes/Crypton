import React from "react";

interface props {
  imageURL: string;
  title: string;
  children: any;
}
export default function FeatureCard({ children, imageURL, title }: props) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <img src={imageURL} alt="icone"  className="ml-1"/>
        <span className="text-white mb-3">{title}</span>
      </div>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}
