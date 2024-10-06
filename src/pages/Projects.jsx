import React from 'react';
import BackgroundImage from '../imgs/ProjectBack.jpg';
import { motion } from 'framer-motion';

const Projects = () => {
    const TextVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
    };

    return (
        <div
            className="flex w-full h-[100vh] bg-cover bg-center items-center justify-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={TextVariant}
                className="py-[140px] px-[30px] flex justify-center items-center"
            >
                <div className="w-[300px]  flex items-center text-white justify-center h-[300px]  rounded-3xl border-2 border-white">
                    <h1 className="text-[4vw] sm:text-[1.5vw]">It will be soon</h1>
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
