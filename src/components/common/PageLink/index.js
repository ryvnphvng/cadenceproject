import React from "react";

import "./styles.scss";

const PageLink = ({ icon, text }) => (
  <div className="page-link">
    <div className="icon-box">
    <img className="icon" alt="img" src={icon} />
    </div>
    <span className="title">{text}</span>
  </div>
)

export default PageLink;