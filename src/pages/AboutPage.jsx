import React from 'react';
import { motion } from 'framer-motion';
import BekImg from '/home/mrbek/Desktop/BekPortfolio/src/imgs/bekBitiruv.jpg';

const AboutPage = () => {
  // Define animation variants for text, image, and links
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

  const linkVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className='flex flex-col lg:flex-row lg:gap-[100px] gap-10 items-center justify-center w-full min-h-[100vh] text-white bg-gradient-to-r from-stone-500 to-slate-800 bg-cover p-6'>
      {/* Animate text container */}
      <div className='w-full lg:w-auto text-center lg:text-left'>
        <motion.div initial="hidden" animate="visible" variants={textVariant}>
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 via-blue-500 to-green-800 text-transparent bg-clip-text animate-gradient">
            Hi, I'm Bek. I'm a web developer.
          </h1>
          <h2 className='text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 via-blue-500 to-green-800 text-transparent bg-clip-text animate-gradient'>
            Welcome to my portfolio
          </h2>
        </motion.div>
        
        {/* Animate the links */}
        <div className="flex flex-col gap-2 mt-4 lg:mt-6">
          <motion.a
            href="https://t.me/mrbekdev"
            className="flex items-center justify-center lg:justify-start h-[60px] gap-4 no-underline text-[20px] lg:text-[25px] text-white border-2 border-gray-500 p-3 rounded-lg hover:bg-gray-600 hover:opacity-55"
            initial="hidden"
            animate="visible"
            variants={linkVariant}
            whileHover={{ scale: 1.1 }}
          >
            <i className="fab fa-telegram"></i>
            <h2 className='bg-gradient-to-r from-gray-100 via-blue-500 to-green-800 text-transparent bg-clip-text animate-gradient'>My Telegram</h2>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/mr_bek_dev"
            className="flex items-center justify-center lg:justify-start h-[60px] gap-4 no-underline text-[20px] lg:text-[25px] text-white border-2 border-gray-500 p-3 rounded-lg hover:bg-gray-600 hover:opacity-55"
            initial="hidden"
            animate="visible"
            variants={linkVariant}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.1 }}
          >
            <i className="fab fa-instagram"></i>
            <h2 className='bg-gradient-to-r from-gray-100 via-blue-500 to-green-800 text-transparent bg-clip-text animate-gradient'>My Instagram</h2>
          </motion.a>

          <motion.a
            href="https://github.com/mrbek1113"
            className="flex items-center justify-center lg:justify-start h-[60px] gap-4 no-underline text-[20px] lg:text-[25px] text-white border-2 border-gray-500 p-3 rounded-lg hover:bg-gray-600 hover:opacity-55"
            initial="hidden"
            animate="visible"
            variants={linkVariant}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.2 }}
          >
            <i className="fab fa-github"></i>
            <h2 className='bg-gradient-to-r from-gray-100 via-blue-500 to-green-800 text-transparent bg-clip-text animate-gradient'>My Github</h2>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=100092234020746"
            className="flex items-center justify-center lg:justify-start h-[60px] gap-4 no-underline text-[20px] lg:text-[25px] text-white border-2 border-gray-500 p-3 rounded-lg hover:bg-gray-600 hover:opacity-55"
            initial="hidden"
            animate="visible"
            variants={linkVariant}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.3 }}
          >
            <i className="fab fa-facebook"></i>
            <h2 className='bg-gradient-to-r from-gray-100 via-blue-500 to-green-800 text-transparent bg-clip-text animate-gradient'>Facebook</h2>
          </motion.a>
        </div>
      </div>

      <motion.img
        src={BekImg}
        alt="Bek"
        className='w-[200px] lg:w-[400px] rounded-full'
        initial="hidden"
        animate="visible"
        variants={imageVariant}
      />
    </div>
  );
};

export default AboutPage;
