import React from "react";
import { motion } from "framer-motion";

import "./loaderMe.css";

const LoaderMe = () => {
  return (
    <motion.section
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -1000,
        transition: {
          duration: 1,
          delay: 2,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="loaderHome"
    >
      <div className="containerLoaderHome">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2 },
          }}
          className="loaderText"
        >
          More Info/Contact
        </motion.span>
      </div>
    </motion.section>
  );
};

export default LoaderMe;
