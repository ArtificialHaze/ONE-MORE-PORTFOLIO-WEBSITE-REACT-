import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">What I do?</span>
      <span className="skillsDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit totam
        repellat earum velit quod quaerat.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src="[SKILL_IMAGE]" className="skillBarImg" alt="Design" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src="[SKILL_IMAGE]" className="skillBarImg" alt="Design" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src="[SKILL_IMAGE]" className="skillBarImg" alt="Design" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
