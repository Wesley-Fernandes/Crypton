import React from "react";
import styles from "./Home.module.css";

export default function HomeLeft() {
  return (
    <div className="w-3/6 flex flex-col overflow-visible pl-2 max-[1280px]:w-full">
      <div className="h-[80px] max-w-[520px] flex items-center justify-end max-[1280px]:max-w-full">
        <img src="/homepage/Arrow_down.png" alt="arrow" />
      </div>
      <img src="/effect/ellipse.png" className={styles.LeftEllipse} />
      <span className="text-white text-8xl mb-14 max-[1280px]:text-6xl">
        live and <br /> on-demand <br /> trading
      </span>
      <p className="w-full text-white/60 text-lg max-[1280px]:px-3 max-[1280px]:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsa
        <br className="max-[1280px]:hidden" /> neque fugiat facere aut ratione,
        quas vel aspernatur perferendis, sunt
        <br className="max-[1280px]:hidden" /> quibusdam. Hic iure inventore
        error?
        <br className="max-[1280px]:hidden" />
        Eum eius sapiente commodi velit?
      </p>
      <div className="flex items-center h-[80px] w-full mt-28 max-[1280px]:gap-4">
        <button className="w-[213px] max-[1280px]:w-[200px] h-[65px] border text-lg font-semibold text-white mb-28 ">
          Explore Now
        </button>
        <span className="text-white text-4xl ml-40 max-[1280px]:ml-1 mb-28 flex items-center font-light">
          <img
            src="/homepage/left.png"
            alt="arrow-left"
            className="mr-10 max-[1280px]:mr-2"
          />
          01-<span className="text-gray-500">03</span>
          <img
            src="/homepage/left.png"
            alt="arrow-right"
            className={styles.ArrowRight}
          />
        </span>
      </div>
    </div>
  );
}
