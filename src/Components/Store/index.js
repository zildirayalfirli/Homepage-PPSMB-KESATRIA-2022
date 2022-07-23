import React from "react";
import { render } from "react-dom";
import { motion, useTime, useTransform } from "framer-motion";
import { BiShoppingBag } from "react-icons/bi";
import "../Store/StoreElements.css"
import { homeInfo3Animation } from "../../animation";

const Store = () => {
  
  return (
    <motion.div className="kotak19"
    variants={homeInfo3Animation}  
        transition={{ delay: 1.5, duration: 1.6, type: "tween" }}
    >
      <div>
      <a href='#y'>
      <BiShoppingBag className="store1" />
        </a>
      </div>
      </motion.div>
    
  );
};

export default Store



