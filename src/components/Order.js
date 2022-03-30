import React, {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity:1,
    x:0,
    transition: {
      type: "spring",
      delay: 0.2,
      mass: 1, // higher slower , lower faster
      damping: 12, // higher less oscillation , lower more oscillation
      when:"beforeChildren" ,
      staggerChildren: 0.4,
    } // complete this animation before children animation occurs
  }
}



const nextVariant = {
  hidden: {x:"-100vw"},
  visible:{
    x:0,
    transition: {type: "spring", stiffness: 300}
  },
}


const childVariants = {
  hidden: {
    opacity:0
  },
  visible:{
    opacity: 1,
  
},
}


const Order = ({ pizza }) => {

  const[show, setShow] = useState(true);

  setTimeout(()=> {
    setShow(false);
  }, 1000);


  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"

     className="container order">

       <AnimatePresence>
         { show && <motion.h2  exit={{opacity: 0, transition: {duration: 10}}}>Thank you for your order </motion.h2> }
       </AnimatePresence>

      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;