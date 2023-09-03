import React from "react";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="introductionContent">
        <span className="hi">Hi,</span>{" "}
        <span className="introductionText">
          I'm <span className="introductionName">Vakho</span> <br />
          Web Developer
        </span>
        <p className="introductionParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          quisquam dicta.
        </p>
        <Link to="#" className="introductionLink">
          <button className="btn">
            <img src="[SUITCASE]" className="btnImg" alt="Suitcase" />
            Hire me
          </button>
        </Link>
      </div>
      <img className="bg" src="[YOUR_IMAGE]" alt="Profile" />
    </section>
  );
};

export default Introduction;
