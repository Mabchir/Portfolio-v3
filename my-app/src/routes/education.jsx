import React from "react";
import "./education.css";
import EduCard from "../EduCard.js";
import ALA from "../images/ala.png";
import Davidson from "../images/davidson.png";
import NTU from "../images/ntu.png"
import Tsinghua from "../images/tsinghua.png"
import SheCodes from "../images/shecodes.png"

export default function Education() {
  return (
    <div className="Education">
      <EduCard
        name="African Leadership Academy"
        major="Entrepreneurial Leadership, African Studies, and CIE"
        logo={ALA}
      />

      <EduCard
        name="Davidson College"
        major="B.S Computer Science and Educational Studies"
        logo={Davidson}
      />

      <EduCard
        name="National Taiwan University"
        major="International Chinese Language Program"
        logo={NTU}
      />

      <EduCard
        name="Tsinghua University"
        major="M.S Management and Global Affairs"
        logo={Tsinghua}
      />

      <EduCard
        name="SheCodes"
        major="Frontend Development Certification"
        logo={SheCodes}
      />
    </div>
  );
}
