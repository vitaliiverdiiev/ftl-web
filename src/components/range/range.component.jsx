import React from "react";
import { Range as RangeSlider } from "rc-slider";

import "./range.styles.scss";

const years = {
  2018: 2018,
  2019: 2019,
  2020: 2020,
  2021: 2021,
};

const Range = () => <RangeSlider min={2018} max={2021} defaultValue={[2020, 2021]} marks={years} />;

export default Range;
