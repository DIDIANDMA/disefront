import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./PriceRange.css";

const PriceRange = () => {
  //makrs는 결국 퍼센트에이지를 이야기하는거엿음...
  const marks = {
    "-10": <strong>10,000</strong>,
    100: {
      label: <strong>100,000</strong>,
    },
  };

  function log(value) {
    console.log(value); //eslint-disable-line
  }
  return (
    <Slider
      range
      min={-10}
      marks={marks}
      step={10}
      onChange={log}
      defaultValue={[-10, 20]}
    />
  );
};

export default PriceRange;
