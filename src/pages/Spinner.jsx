import React from "react";
import { Circles } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="circleSpinner">
      <Circles color="#371B58" height={80} width={80} className="circle" />
    </div>
  );
}

export default Spinner;
