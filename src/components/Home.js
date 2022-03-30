import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";


const buttonVariant = {
  hover:{
    scale: 1.1,
     textShadow: "0px 0px  8px rgb(255, 255, 255)",
     boxShadow: "0px 0px  8px rgb(255, 255, 255)",
     transition: {
       duration: 0.3,
       yoyo: Infinity,
     }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      transition={{delay: 1.5, duration: 1.5}}
     >
        <h2 
          animate={{fontSize: 60, color: "#ff2994",x: 100, y: -100}}
        >
        Welcome to Pizza Joint
        </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;