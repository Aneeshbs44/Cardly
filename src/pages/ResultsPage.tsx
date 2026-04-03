/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, BookmarkPlus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCardComponent } from "../components/CreditCardComponent";
import { Navbar } from "../layouts/Navbar";

export const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || { cardType: "HDFC Millennia", product: "iPhone 15", analysis: null };
  const { cardType, product, analysis } = state;

  const platformColors: Record<string, string> = {
    Amazon: "bg-[#FF9900]",
    Flipkart: "bg-[#2874F0]",
    Myntra: "bg-[#FF3F6C]",
  };

  const fallbackResults = [
    { platform: "Amazon", discount: "10% Instant Discount", card: cardType, price: "₹899", color: "bg-[#FF9900]" },
    { platform: "Flipkart", discount: "5% Unlimited Cashback", card: cardType, price: "₹949", color: "bg-[#2874F0]" },
    { platform: "Myntra", discount: "Flat ₹50 Off", card: cardType, price: "₹849", color: "bg-[#FF3F6C]" },
  ];

  const results = analysis?.all?.length
    ? analysis.all.map((item: { platform: string; price: number; final_price: number }) => {
        const discountAmount = Math.max(0, item.price - item.final_price);
        return {
          platform: item.platform,
          discount: discountAmount > 0 ? `Save ₹${discountAmount}` : "No card offer",
          card: cardType,
          price: `₹${item.final_price}`,
          color: platformColors[item.platform] || "bg-gray-500",
        };
      })
    : fallbackResults;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <Navbar isDark />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.button
          onClick={() => navigate('/analyzer')}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Analyzer
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Best deals for <br />
              <span className="text-purple-500">{product}</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">
              We've analyzed your <span className="text-white font-bold">{cardType}</span> across major platforms. Here are the best savings we found.
            </p>

            <div className="relative h-64 w-full flex justify-center items-center mb-12">
               <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full" />
               <CreditCardComponent className="w-80 h-48 rotate-[-5deg] z-10 shadow-2xl" isDark />
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="absolute -right-4 -bottom-4 bg-white text-black p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
               >
                 <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                   <ShoppingBag className="text-purple-600 w-5 h-5" />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-500 uppercase">Product</div>
                   <div className="font-bold text-sm">{product}</div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {results.map((res, i) => (
              <motion.div
                key={res.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${res.color}`} />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 ${res.color} rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg`}>
                      {res.platform[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{res.platform}</h3>
                      <p className="text-purple-400 font-medium">{res.discount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold tracking-tighter">{res.price}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Best Price</div>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  Go to {res.platform}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Save Results Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 text-center"
        >
          <BookmarkPlus className="w-12 h-12 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoying the results?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Save your analysis for future use and get personalized recommendations tailored to your wallet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/signin")}
              className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-bold transition-all flex items-center gap-2"
            >
              Sign Up <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
