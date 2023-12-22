import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import profilePicture from "../../assets/backProfileImage.jpg";
import "./hero.css";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const left = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <section className="hero" id="home">
      <div className="containerHero">
        <div className="firstText">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2,
              },
            }}
            style={{ x: right }}
            className="textFilled"
          >
            software engineer
          </motion.h1>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2,
              },
            }}
            style={{ x: right }}
            className="textOutline"
          >
            software engineer
          </motion.h1>
        </div>
        <div className="secondText">
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2,
              },
            }}
            style={{ x: left }}
            className="textFilled"
          >
            javascript tech stack
          </motion.h1>
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2,
              },
            }}
            style={{ x: left }}
            className="textOutline"
          >
            javascript tech stack
          </motion.h1>
        </div>
        <div className="heroImage">
          <motion.img
            initial={{ y: 200, opacity: 1 }}
            animate={{
              y: 0,
              transition: {
                duration: 1,
                delay: 2.1,
              },
            }}
            className="heroPicture"
            src={profilePicture}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
