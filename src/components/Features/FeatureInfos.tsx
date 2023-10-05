import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureInfos() {
  return (
    <div className="w-1/2 max-[1280px]:w-full max-[1280px]:px-3">
      <span className="text-[#C23893] text-3xl max-[1280px]:text-2xl">
        Features
      </span>
      <h1 className="text-white text-6xl mb-6 max-[1280px]:text-4xl">
        Crypto Premium
      </h1>
      <FeatureCard
        imageURL="/Features/star.png"
        title="Budgeting intervals"
        key="01"
      >
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
        <br className="max-[1280px]:hidden" />
        officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
      </FeatureCard>

      <FeatureCard
        imageURL="/Features/star.png"
        title="Budgeting intervals"
        key="02"
      >
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
        <br className="max-[1280px]:hidden" />
        officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
      </FeatureCard>

      <FeatureCard
        imageURL="/Features/star.png"
        title="Budgeting intervals"
        key="03"
      >
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
        <br className="max-[1280px]:hidden" />
        officia et sint laboriosam sed ipsa sint ut voluptatum labore et.
      </FeatureCard>
    </div>
  );
}
