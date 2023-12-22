import React from "react";
import "./service.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Service = () => {
  const { scrollYProgress } = useScroll();
  const frontend = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const backend = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const fullstack = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section id="service">
      <div className="serviceTypo">
        <motion.span style={{ x: frontend }}>
          Frontend <span className="outlineTypo">Developer</span> - Frontend{" "}
          <span className="outlineTypo">Developer</span> - Frontend{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
        <motion.span style={{ x: backend }}>
          Backend <span className="outlineTypo">Developer</span> - Backend{" "}
          <span className="outlineTypo">Developer</span> - Backend{" "}
          <span className="outlineTypo">Developer</span> -{" "}
        </motion.span>
        <motion.span style={{ x: fullstack }}>
          {" "}
          <span className="outlineTypo">Fullstack</span> Developer -{" "}
          <span className="outlineTypo">Fullstack</span> Developer -{" "}
          <span className="outlineTypo">Fullstack</span> Developer -{" "}
        </motion.span>
      </div>
      <div className="serviceStack">
        <div className="serviceTechStack">
          <span>contoh</span>
          <span>contoh</span>
          <span>contoh</span>
          <span>contoh</span>
          <span>contoh</span>
        </div>
        <div className="serviceTechStack">
          <span>contoh</span>
          <span>contoh</span>
          <span>contoh</span>
          <span>contoh</span>
        </div>
      </div>
    </section>
  );
};

export default Service;
