import React from "react";
import { AboutContainer } from "./AboutContainer";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center w-full max-[1280px]:mt-40">
      <AboutContainer>
        <h1 className="text-6xl font-bold text-white max-[1280px]:text-4xl max-[1280px]:text-center">
          Automated portfolio tracking
        </h1>
        <p className="text-center w-[50%] text-gray-600 max-[1280px]:w-full max-[1280px]:px-1">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas.
        </p>
        <div className="w-full flex flex-row justify-between max-[1280px]:flex-col max-[1280px]:px-1 max-[1280px]:gap-3 max-[1280px]:items-center">
          <AboutCard
            key="01"
            id="01"
            imageURL="/About/money.png"
            title="Connect wallet & exchanges"
          >
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
            officia et sint laboriosam sed ipsa sint ut volup.
          </AboutCard>

          <AboutCard
            key="02"
            id="02"
            imageURL="/About/eyes.png"
            title="Connect wallet & exchanges"
          >
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
            officia et sint laboriosam sed ipsa sint ut volup.
          </AboutCard>

          <AboutCard
            key="03"
            id="03"
            imageURL="/About/paper.png"
            title="Connect wallet & exchanges"
          >
            Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem
            officia et sint laboriosam sed ipsa sint ut volup.
          </AboutCard>
        </div>
      </AboutContainer>
    </section>
  );
}
