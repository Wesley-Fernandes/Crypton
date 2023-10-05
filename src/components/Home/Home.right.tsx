import React from "react";
import styles from "./Home.module.css";
export default function HomeRight() {
  return (
    <div className="w-3/6 max-[1280px]:hidden">
      <div className={styles.StarsContainer}>
        <img src="/homepage/Star.png" alt="star" className={styles.TopStar} />
      </div>
      <img src="/homepage/iphone-hands.png" alt="phone in the hand" />
      <div className={styles.StarsContainer}>
        <img
          src="/homepage/Star.png"
          alt="star"
          className={styles.MiddleStar}
        />
        /
      </div>
      <div className={styles.StarsContainer}>
        <img
          src="/homepage/Star.png"
          alt="star"
          className={styles.BottomStar}
        />
      </div>
    </div>
  );
}
