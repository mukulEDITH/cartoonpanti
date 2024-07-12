"use client"
import React from 'react'
import Styles from './Progress.module.css'
import {motion, useScroll} from 'framer-motion';




function ProgressBar() {


const {scrollYProgress} = useScroll();



  return (
    <motion.div className={Styles.progressBar}  style={{scaleX: scrollYProgress}} > 
    
    
    </motion.div>
  )
}

export default ProgressBar