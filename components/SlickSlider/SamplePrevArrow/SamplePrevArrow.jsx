import React from "react";

export const SamplePrevArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        cursor: 'pointer',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '40%',
        bottom: '0%',
        width: '3vw',
        height: '3vw',
        padding: '.8vw',
        borderRadius: '50px',
        backgroundColor: 'unset',
        opacity: .5,
        zIndex: 2
      }}
      onClick={onClick}
    >
      <img loading="lazy" style={{width: '100%', height: '100%'}} src={"images/icons/back.png"} alt="" />
    </div>
  );
};
