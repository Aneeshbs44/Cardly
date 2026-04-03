/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

export const CreditCardComponent = ({ 
  className = "", 
  layoutId = "main-card", 
  isDark = false,
  animate,
  transition: customTransition
}: { 
  className?: string; 
  layoutId?: string; 
  isDark?: boolean;
  animate?: any;
  transition?: any;
}) => (
  <motion.div
    layoutId={layoutId}
    animate={animate}
    transition={customTransition || { 
      duration: 2.5, 
      ease: [0.22, 1, 0.36, 1] 
    }}
    className={`relative rounded-2xl border p-6 shadow-2xl flex flex-col justify-between overflow-hidden ${isDark ? 'bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 border-white/20' : 'bg-gradient-to-br from-slate-800 to-slate-950 border-white/10'} text-white ${className}`}
  >
    <div className="flex justify-between items-start">
      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
        <Zap className="text-white w-5 h-5" />
      </div>
      <div className="text-right">
        <div className="text-white font-bold text-lg italic">VISA</div>
        <div className="text-white/50 text-[9px] uppercase tracking-widest">Premium</div>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="w-10 h-7 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md" />
      </div>
      <div className="text-white font-mono text-base tracking-widest">**** **** **** 8829</div>
      <div className="flex justify-between items-end">
        <div className="text-white/80 uppercase text-[10px] tracking-widest">Kevin Lee</div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded-full" />
          <span className="text-white font-bold italic pr-1">cardly</span>
        </div>
      </div>
    </div>
    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
  </motion.div>
);
