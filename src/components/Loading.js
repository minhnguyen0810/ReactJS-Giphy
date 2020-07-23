import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div className="custom__loading">
      <div className="sweet-loading">
        <ClipLoader size={50} color={"#123abc"} />
      </div>
    </div>
  );
}
