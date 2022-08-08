import * as React from "react";

const Vivino = props => {
  const { width, height } = props;
  return (
    <svg
      id="layer"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 652 652"
      style={{
        enableBackground: "new 0 0 652 652",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style type="text/css">{"\n    .st0{fill:#A61A30;}\n  "}</style>
      <path
        className="st0"
        d="M150.5,374.5h26.7V270h-26.7V374.5z M327.3,374.5l26.7-0.1V270h-26.7V374.5L327.3,374.5z M21.5,269.9h26.8 l26.2,60.3h1.8l26.6-60.3l27.4,0L84.6,374.5l-17,0.1L21.5,269.9z M198,270l26.7,0l26.1,60.2h2l26.3-60.2l27.4,0L261,374.5l-17.1,0.1 L198,270z M388.6,269.9h18.8c2.4,3.4,4.5,6.4,6.6,9.1h1.8c26.7-20.3,67.6-7.6,67.6,26.8l0,68.7h-26l-0.2-64.4 c-1.3-21.4-33.1-24.5-39.3-2.7c-1.8,6.9-2.4,14-2,21.2l0,46l-27.4-0.1L388.6,269.9z M566.2,269.2c30.5,0,55.3,23.7,55.3,52.7 c-0.7,29.9-25.4,53.6-55.3,53v-21.9c16.8-0.2,30.2-14,30-30.7c-0.2-16.5-13.5-29.7-30-30V269.2z M566.2,374.8 c-29.9,0.6-54.6-23.1-55.3-53c0-29,24.9-52.7,55.3-52.7v23.1c-16.8,0.2-30.2,14-30,30.7c0.2,16.5,13.5,29.7,30,30V374.8L566.2,374.8 z"
      />
    </svg>
  );
};

export default Vivino;
