import Link from "next/link";
import React from "react";

interface props {
  url: string;
  image: string;
}
export default function Jumper({ image, url }: props) {
  return (
    <Link href={url}>
      <img
        src={image}
        alt="icon social network"
        className="px-2 py-2 hover:bg-black hover:rounded-lg"
      />
    </Link>
  );
}
