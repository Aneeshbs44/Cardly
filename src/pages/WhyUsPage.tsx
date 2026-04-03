/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Navbar } from "../layouts/Navbar";

export const WhyUsPage = () => {
  const problems = [
    {
      emoji: "🔍",
      title: "Too Many Platforms to Check",
      desc: "Users have to manually browse Amazon, Flipkart, and other sites just to find the best deal."
    },
    {
      emoji: "💳",
      title: "Confusing Credit Card Offers",
      desc: "Different cards offer different discounts and cashback, making it hard to know which one saves the most."
    },
    {
      emoji: "🤯",
      title: "Final Price Is Hard to Calculate",
      desc: "Users must manually calculate discounts, cashback, and offers to know the actual price."
    },
    {
      emoji: "⏳",
      title: "Time-Consuming Process",
      desc: "Checking multiple platforms and offers takes too much time for every purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 md:px-12">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Why Us</h1>
          <p className="text-gray-500 text-lg">We solve the real problems of online shopping.</p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Problems Faced</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors"
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center"
        >
          <p className="text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
            Save More. Compare Faster. Shop Smarter.
          </p>
          <p className="text-xl text-gray-600 mb-12">
            We scan multiple platforms, apply your credit card offers, and show you the best deal — instantly. 🚀
          </p>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-center gap-12 text-base">
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <span className="font-bold text-gray-900">Phone:</span> 9110813898
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <span className="font-bold text-gray-900">Email:</span> anish107655@gmail.com
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
