import React from "react";
import BackgroundImage from '../imgs/AboutBacg.jpg';
import { motion } from "framer-motion";

const AboutPage = () => {
    const TextVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
      };
    
  return (
    <div
      className="bg-cover bg-center w-full h-[100vh]"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* To'rtburchak shakl */}
        <motion.div initial="hidden" animate="visible" variants={TextVariant} className="bg-black bg-opacity-50 rounded-lg p-6 md:p-12 w-[80%] max-w-[600px] h-auto md:w-[600px] md:h-[400px] flex items-center justify-center animate-fade-in">
          <h2 className="text-yellow-300 text-center text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
            I am Otajanov Ismadbek. I am a developer with 2 years of experience in
            Backend and 1.5 years in Frontend. Currently, I am a 3-year student of
            programming at Urganch State University. My knowledge is HTML, CSS,
            Javascript, React.js, Express.js, Nest.js, Bootstrap, Tailwind CSS,
            working with APIs.
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
