import React from "react";
import Service from "./Service";
import How from "./How";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";

export default function Services() {
  return (
    <div className="min-h-screen w-full mt-40 flex flex-col items-center">
      <h1 className="text-white text-6xl w-full text-center">
        Make every step user-centric
      </h1>
      <span className="mt-10 text-[#767799]">
        Lorem ipsum dolor sit amet, consectetur adipis elit
      </span>
      <div className="w-[1240px] flex flex-wrap mt-20">
        <Service border="border-r" image="sales.png" key="support">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </Service>

        <Service border="border-r" image="sales.png" key="sales">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </Service>

        <Service border="" image="onboarding.png" key="onboarding">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </Service>

        <Service border="border-r border-t" image="product.png" key="product">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </Service>

        <Service border="border-t border-r" image="favorite.png" key="favorite">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </Service>

        <Service border="border-t" image="chart.png" key="chart">
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </Service>
      </div>

      <How />
      <Testimonials />
      <AboutUs/>
    </div>
  );
}
