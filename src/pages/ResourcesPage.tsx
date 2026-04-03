/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../layouts/Navbar";

export const ResourcesPage = () => {
  const resources = [
    {
      title: "How to pick credit card faster",
      content: "Identify your top spending categories (Travel, Dining, or Online Shopping) and match them with cards offering 5x rewards in those areas."
    },
    {
      title: "How not to overspend",
      content: "Set strict monthly limits on your banking app and use credit cards only for planned purchases to maximize rewards without debt."
    },
    {
      title: "Understanding Reward Points",
      content: "Learn how to calculate the real value of reward points across different banks to ensure you're getting the best redemption rate."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Resources</h1>
          <p className="text-gray-500 text-lg">Expert guides to help you manage your finances better.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-purple-50 border border-purple-100 hover:bg-purple-100 transition-colors"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-6">{r.title}</h3>
              <p className="text-purple-700/80 text-base leading-relaxed">{r.content}</p>
              <button className="mt-8 text-purple-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
