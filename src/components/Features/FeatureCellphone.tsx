import React from "react";
import styles from "./Feature.module.css";
export default function FeatureCellphone() {
  return (
    <div className="w-1/2 flex items-center justify-end max-[1280px]:hidden">
      <img src="/Features/iphone.png" alt="celular" className="absolute z-40" />
      <div className={styles.Effects}>
        <img
          src="/Features/ellipse.png"
          alt="elipsse"
          className={styles.Ellipse}
        />
      </div>
    </div>
  );
}
