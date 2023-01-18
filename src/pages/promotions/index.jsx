import LayoutApp from "components/layoutApp";
import React from "react";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";
import { imageSlider } from "utils/banners";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Promotions = () => {
  return (
    <LayoutApp needHeader="true">
      <div>
        <AutoplaySlider
          play={true}
          animation="foldOutAnimation"
          interval={3000}
        >
          {imageSlider.map((data) => (
            <div
              className="h-96"
              style={{
                height: "70%",
                borderRadius: 10,
              }}
              infinite={true}
              data-src={data.data}
            />
          ))}
        </AutoplaySlider>
      </div>
    </LayoutApp>
  );
};

export default Promotions;
