import React, { useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, <br />
          I'm Aditya sakhuja
        </h1>
        <p className={styles.description}>
          "A front-end developer focused on building responsive and 
           user-centric web applications using React.js. I aim to create 
           clean, maintainable code and seamless user experiences.
          <br />Passionate about crafting seamless user experiences
                with clean, efficient code. 
          <br />
          Currently expanding my skill set into backend technologies
          to become a more well-rounded, full-stack developer."
        </p>
        <div className={styles.buttons}>
          <a className={styles.contactBtn} href="#contact">
            Contact Me
          </a>
          <a
            className={styles.resumeBtn}
            href="Aditya_sakhuja_Resume.pdf"
            download="Aditya_sakhuja_Resume.pdf"
          >
            My Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
