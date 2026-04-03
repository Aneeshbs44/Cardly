/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = ({ isDark = false }: { isDark?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 ${isDark ? 'bg-black/80 text-white border-white/10' : 'bg-white/80 text-gray-900 border-gray-100'} backdrop-blur-md border-b`}>
      <Link to="/" className="flex items-center gap-2 cursor-pointer z-50">
        <div className={`w-8 h-8 ${isDark ? 'bg-white' : 'bg-black'} rounded-lg flex items-center justify-center`}>
          <Zap className={`${isDark ? 'text-black' : 'text-white'} w-5 h-5`} />
        </div>
        <span className="font-bold text-xl tracking-tight">Cardly</span>
      </Link>

      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <Link to="/explore" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>Explore</Link>
        <Link to="/why-us" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>Why Us</Link>
        <Link to="/resources" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>Resources</Link>
        <Link to="/signin" className={`hover:${isDark ? 'text-white' : 'text-black'} transition-colors`}>Sign In</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/signup" className={`hidden sm:block px-5 py-2 text-sm font-semibold border ${isDark ? 'border-white/20 hover:bg-white/10' : 'border-gray-200 hover:bg-gray-50'} rounded-full transition-colors`}>
          Sign Up
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 ${isDark ? 'bg-black' : 'bg-white'} md:hidden`}
          >
            <Link to="/explore" onClick={() => setIsOpen(false)} className="text-2xl font-bold">Explore</Link>
            <Link to="/why-us" onClick={() => setIsOpen(false)} className="text-2xl font-bold">Why Us</Link>
            <Link to="/resources" onClick={() => setIsOpen(false)} className="text-2xl font-bold">Resources</Link>
            <Link to="/signin" onClick={() => setIsOpen(false)} className="text-2xl font-bold">Sign In</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold">Sign Up</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
