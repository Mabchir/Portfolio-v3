import React from "react";

import { ReactComponent as MySvgFile1 } from "../images/undraw_web_development_0l6v 1.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="description">
        <h2>Mariem Bchir</h2>
        <h3>a full-stack developer from Tunisia based in the USA</h3>
      </div>

      <MySvgFile1 className="home_svg" />
    </div>
  );
}
