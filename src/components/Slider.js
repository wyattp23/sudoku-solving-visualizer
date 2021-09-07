import { useState } from "react";

export const Slider = () => {
  const [maxDelay] = useState(25);
  const [minDelay] = useState(1);
  const [delay, setDelay] = useState(maxDelay);

  return (
    <>
      <div className="slidercontainer">
        <p>Delay: {delay ** 2}ms</p>
        <input
          type="range"
          min={minDelay}
          max={maxDelay}
          id="animSpeed"
          onChange={(e) => setDelay(e.target.value)}
        />
      </div>
    </>
  );
};
