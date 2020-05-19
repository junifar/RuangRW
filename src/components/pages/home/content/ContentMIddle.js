import React from "react";
import { Link } from "react-router-dom";

const ContentMiddle = () => {
  return (
    <div>
      <div className="ui divider" />
      <div className="ui top attached tabular menu">
        <div className="active item">Statistic Warga</div>
      </div>
      <div className="ui bottom attached active tab segment">
        <div className="ui divided items">
          <div className="link item">
            <div className="ui tiny image">
              <img
                src="https://semantic-ui.com/images/avatar2/large/matthew.png"
                alt=""
              />
            </div>
            <div className="content">
              <Link to="#" className="header">
                Content Header
              </Link>
              <div className="description">
                A description which may flow for several lines and give context
                to the content.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMiddle;
