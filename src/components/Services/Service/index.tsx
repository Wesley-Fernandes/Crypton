import React from "react";
interface props {
  children: string;
  image: string;
  border: string;
}
export default function Service({ children, image, border }: props) {
  return (
    <div
      className={`w-[411px] h-[286px] border-[#C23893] flex flex-col justify-center items-center gap-4 ${border}`}
    >
      <img src={`/Services/${image}`} alt="icon" />
      <p className="text-[#767799] text-center w-[330px]">{children}</p>
    </div>
  );
}
