import React from "react";

interface props {
  image: string;
  name: string;
  job: string;
}

export default function Testimonial({ image, job, name }: props) {
  return (
    <div
      style={{ background: `url('/Services/Testimonials/${image}.png')` }}
      className="h-[681px] w-[379px] rounded-3xl flex items-end overflow-hidden"
    >
      <div
        style={{ background: "url('/Services/Testimonials/degrade.png')" }}
        className="flex h-[267px] w-[379px] items-end justify-between px-8"
      >
        <div className="flex flex-col mb-12">
          <span className="text-white text-2xl font-bold">{name}</span>
          <small className="text-gray-300 text-lg">{job}</small>
        </div>

        <button className="w-[69px] h-[69px] border-2 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-lg">
          <img src="/Services/Testimonials/play.png" alt="icon" />
        </button>
      </div>
    </div>
  );
}
