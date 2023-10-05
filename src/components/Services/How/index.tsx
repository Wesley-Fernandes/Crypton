import React from "react";

export default function How() {
  return (
    <div className="h-screen flex items-center mt-20">
      <div>
        <img src="/Services/cellphone.png" alt="cellphone" />
      </div>

      <div>
        <span className="text-[#962F79] font-bold text-lg">How it works</span>
        <h1 className="w-[581px] text-white text-6xl mt-2">
          Viewing long- term and short -term forcast
        </h1>
        <p className="w-[555px] text-[#767799] mt-10">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et <br />
          possimus voluptas.
        </p>

        <button className="text-white font-bold capitalize border w-[213px] h-[65px] mt-8">
          explore now
        </button>
      </div>
    </div>
  );
}
