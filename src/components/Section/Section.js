import React from "react";
import style from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;