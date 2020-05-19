import React from "react";
import ContentRight from "./ContentRight";
import ContentLeft from "./ContentLeft";
import ContentMiddle from "./ContentMIddle";

const Content = () => {
  return (
    <div className="ui main text container">
      <h1 className="ui header">Semantic UI Fixed Template</h1>
      <div className="ui two column grid">
        <div className="nine wide column">
          <ContentLeft />
        </div>
        <div className="seven wide column">
          <ContentRight />
        </div>
      </div>
      <div className="sixteen wide column">
        <ContentMiddle />
      </div>
    </div>
  );
};

export default Content;
