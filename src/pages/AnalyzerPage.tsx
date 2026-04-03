/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CreditCardComponent } from "../components/CreditCardComponent";
import { Navbar } from "../layouts/Navbar";

export const AnalyzerPage = ({ userEmail }: { userEmail: string }) => {
  const navigate = useNavigate();
  const [cardType, setCardType] = useState("");
  const [product, setProduct] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!cardType || !product) return;

    setError("");
    setAnalyzing(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${apiBaseUrl}/api/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardType, product }),
      });

      if (!response.ok) {
        throw new Error("Analyze request failed");
      }

      const analysis = await response.json();
      navigate('/results', { state: { cardType, product, analysis } });
    } catch (err) {
      setError("Could not fetch offers right now. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <Navbar isDark />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            One card. <br />
            <span className="text-gray-500">Endless functions.</span>
          </h1>
          
          <div className="relative flex justify-center items-center mb-12 h-[250px] sm:h-[300px] w-full">
            {/* Card Stack Visual - Matching the image style */}
            <div className="absolute w-48 sm:w-64 h-32 sm:h-40 bg-white/5 rounded-2xl border border-white/5 rotate-[-15deg] translate-x-[-60px] sm:translate-x-[-80px] blur-[1px] opacity-40" />
            <div className="absolute w-48 sm:w-64 h-32 sm:h-40 bg-white/10 rounded-2xl border border-white/10 rotate-[-8deg] translate-x-[-30px] sm:translate-x-[-40px] opacity-60" />
            <CreditCardComponent className="w-64 h-40 sm:w-80 sm:h-48 rotate-[0deg] z-10 shadow-[0_0_50px_rgba(139,92,246,0.3)]" isDark />
            <div className="absolute w-48 sm:w-64 h-32 sm:h-40 bg-white/10 rounded-2xl border border-white/10 rotate-[8deg] translate-x-[30px] sm:translate-x-[40px] opacity-60" />
            <div className="absolute w-48 sm:w-64 h-32 sm:h-40 bg-white/5 rounded-2xl border border-white/5 rotate-[15deg] translate-x-[60px] sm:translate-x-[80px] blur-[1px] opacity-40" />
            
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600/10 blur-[80px] sm:blur-[120px] rounded-full -z-10" />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Everything you need to control spend and optimize finance operations, all on a single platform. With all the essentials you need out in the world, and nothing to limit your possibilities.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-2 text-left"
              >
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Your Credit Card</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="e.g. HDFC Millennia"
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-2 text-left"
              >
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Product / Item</label>
                <div className="relative">
                  <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="e.g. iPhone 15"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white"
                  />
                </div>
              </motion.div>
            </div>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onClick={handleAnalyze}
              disabled={analyzing || !cardType || !product}
              className="w-full py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {analyzing ? "Analyzing..." : "Find Best Discount"}
            </motion.button>
            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
