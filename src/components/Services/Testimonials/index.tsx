import React from "react";
import Testimonial from "./Testimonial";
import users from "./testimonials.json";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-[495px] justify-between mb-10 ">
        <img src="/Services/Testimonials/left.png" alt="icon" />
        <h1 className="text-white text-5xl">Testimonials</h1>
        <img src="/Services/Testimonials/right.png" alt="icon" />
      </div>
      <p className="w-[661px] text-center text-[#767799] mb-10">
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
        et sint laboriosam sed ipsa sint ut voluptatum labore et.
      </p>
      <div className="w-[1258px] flex gap-12">
        {users.map((user) => {
          return (
            <Testimonial
              key={user.id}
              image={user.image}
              name={user.name}
              job={user.job}
            />
          );
        })}
      </div>
    </div>
  );
}
