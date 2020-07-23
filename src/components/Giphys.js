import React, { Fragment } from "react";
import ItemGiphy from "./ItemGiphy";

function Giphys(props) {
  // Render list giphy when recieved props.giphys from Home component
  let renderListGiphys = (giphys) => {
    if (giphys && giphys.length > 0) {
      return giphys.map((item, index) => {
        return <ItemGiphy giphy={item} key={index} />;
      });
    }
  };
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row justify-content-center">
          {renderListGiphys(props.giphys)}
        </div>
      </div>
    </Fragment>
  );
}

export default Giphys;
