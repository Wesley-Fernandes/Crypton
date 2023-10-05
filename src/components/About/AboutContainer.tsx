import React from "react";

interface props {
  children: React.ReactNode;
}

export function AboutContainer({ children }: props) {
  return <div className="flex flex-col items-center gap-[33px] max-w-[1588px] w-full max-[1280px]:w-full ">{children}</div>;
}
