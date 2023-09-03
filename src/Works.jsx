import React from "react";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My portofolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga tenetur
        consequuntur cumque natus blanditiis qui reprehenderit nulla, sequi
        nobis Non.
      </span>
      <div className="worksImgs">
        <img src="[YOUR_WORK]" alt="Work-01" className="worksImg" />
        <img src="[YOUR_WORK]" alt="Work-02" className="worksImg" />
        <img src="[YOUR_WORK]" alt="Work-03" className="worksImg" />
        <img src="[YOUR_WORK]" alt="Work-04" className="worksImg" />
        <img src="[YOUR_WORK]" alt="Work-05" className="worksImg" />
        <img src="[YOUR_WORK]" alt="Work-06" className="worksImg" />
      </div>
      <button className="worksBtn">See more</button>
    </section>
  );
};

export default Works;
