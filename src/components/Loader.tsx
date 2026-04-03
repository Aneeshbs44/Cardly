/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CreditCardComponent } from "./CreditCardComponent";

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const words = ["SCAN", "SAVE", "SUGGEST"];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev === words.length) {
          clearInterval(timer);
          setTimeout(onComplete, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1800); // Equal interval for each word
    return () => clearInterval(timer);
  }, [onComplete, words.length]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-indigo-900/20" />
      
      <AnimatePresence mode="wait">
        {step < words.length ? (
          <motion.h1
            key={words[step]}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Equal speed for all words
            className="text-6xl md:text-9xl font-black tracking-tighter text-white"
          >
            {words[step]}
          </motion.h1>
        ) : (
          <motion.div
            key="card-wrapper"
            initial={{ scale: 0, opacity: 0, rotate: -1440 }}
            animate={{ scale: 1.5, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 5,
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 2.5 },
              scale: { duration: 4, ease: "circOut" }
            }}
            className="relative w-96 h-60"
          >
            <CreditCardComponent 
              layoutId="hero-card" 
              className="w-full h-full" 
              transition={{ 
                duration: 4, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
