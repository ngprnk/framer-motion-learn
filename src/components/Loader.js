import React from 'react'
import {motion, useCycle} from "framer-motion";


const loaderVariant = {
  one: {
    x: [0,30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 1,
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeIn"
      }
    }
  },
  two:{
    x: [4,10],
    y: [10,-10],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.4,
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeIn"
      }
    }

  }
}

export const Loader = () => {
  const [animation, cycleAnimation] = useCycle("one", "two");
  return (<div>

    <motion.div
    className='loader'
    variants={loaderVariant}
    animate={animation}
    >
      </motion.div>
        <button onClick={() => cycleAnimation()}> Cycle</button>
        </div>
  )
}

