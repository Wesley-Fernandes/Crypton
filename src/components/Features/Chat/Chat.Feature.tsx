import React from "react";
import styles from "./Chat.module.css";
export default function ChatImage() {
  return (
    <div className="w-1/2 flex items-center justify-end max-[1280px]:hidden mt-40">
      <img src="/Features/chats.png" alt="celular" className="absolute z-40 right-80" />
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
