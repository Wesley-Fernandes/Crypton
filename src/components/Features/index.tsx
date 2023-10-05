import React from "react";

import FeatureCellphone from "./FeatureCellphone";
import FeatureInfos from "./FeatureInfos";
import Chat from "./Chat";

export default function Features() {
  //max-[1280px]:flex-col max-[1280px]:max-w-full max-w-[1588px]
  return (
    <div
      className={`
      
      h-screen mx-auto  w-full flex items-center justify-center overflow-visible
      flex-wrap max-w-[1588px]
      
      `}
    >
      <FeatureCellphone />
      <FeatureInfos/>
      <Chat/>
    </div>
  );
}
