import React from "react";

interface props {
  id: string;
  imageURL: string;
  title: string;
  children: any;
}

export default function AboutCard({ children, imageURL, title, id }: props) {
  return (
    <div className="p-10 border h-[427px] min-w-[344px] max-w-[344px] rounded-xl border-[#C23893] flex flex-col items-center max-[1280px]:w-full">
      <span className="flex text-white text-4xl w-full">{id}</span>
      <div className="flex items-center justify-center mt-3">
        <img src={imageURL} alt="imagem do card" />
      </div>
      <div className="flex items-center mt-8">
        <span className="text-white text-3xl text-center">{title}</span>
      </div>
      <div className="flex items-center w-[304px] justify-center ">
        <p className="text-gray-500 text-sm mt-8 text-center">{children}</p>
      </div>
    </div>
  );
}
