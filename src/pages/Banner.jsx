import React from 'react';
import { motion } from "motion/react"
import team1 from '../assets/image/team1.jpg'
import team2 from '../assets/image/team2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='flex-1'>
                <motion.img
            src={team1}
            animate={{y:[100,150 ,200]}}
            transition={{duration:5 , repeat:Infinity}}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            />
                <motion.img
            src={team2}
            animate={{x:[100,150 ,100]}}
            transition={{duration:10 ,delay:5, repeat:Infinity}}
            className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            />
            </div>
            <div className='flex-1'>
            <motion.h1 animate={{rotate:-180 ,
                transition: {duration:4},
                
            }} className="text-5xl font-bold">Latest Job</motion.h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;