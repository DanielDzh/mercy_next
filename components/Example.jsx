import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import { useTrans } from "../hooks/useTrans";

const Example = ({ children, styles }) => {
   const { trans } = useTrans();
   return (
      <div style={styles}>
         <RWebShare
            data={{
               text: trans("poem"),
               url: "https://www.mercychain.org",
               title: "Mercy Chain",
            }}
            onClick={() => console.log("shared successfully!")}
         >
            <button style={{ width: "100%", background: 'unset', border: 'none' }}>{children}</button>
         </RWebShare>
      </div>
   );
};

export default Example;