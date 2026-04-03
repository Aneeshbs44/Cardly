/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, X, CheckCircle2, CreditCard, Award, ShieldCheck, Info } from "lucide-react";
import { Navbar } from "../layouts/Navbar";

interface CardDetail {
  name: string;
  type: string;
  color: string;
  rewards: string[];
  fee: string;
  benefits: string[];
  bestFor: string;
  description: string;
}

export const ExplorePage = () => {
  const [selectedCard, setSelectedCard] = useState<CardDetail | null>(null);

  const cards: CardDetail[] = [
    { 
      name: "HDFC Millennia", 
      type: "Cashback", 
      color: "bg-blue-600",
      rewards: ["5% Cashback on Amazon, Flipkart, Myntra", "1% Cashback on all other spends", "1000 CashPoints as Welcome Benefit"],
      fee: "₹1000 + GST (Waived on ₹1L spend)",
      benefits: ["8 Complimentary Domestic Lounge Access", "1% Fuel Surcharge Waiver", "Dineout discounts up to 20%"],
      bestFor: "Online Shopping & Millennials",
      description: "A versatile card designed for the digital generation, offering high cashback on major e-commerce platforms."
    },
    { 
      name: "Axis Ace", 
      type: "Utility", 
      color: "bg-green-600",
      rewards: ["5% Cashback on Google Pay (Bill Payments)", "4% Cashback on Swiggy, Zomato, Ola", "2% Cashback on all other spends"],
      fee: "₹499 + GST (Waived on ₹2L spend)",
      benefits: ["4 Complimentary Domestic Lounge Access", "1% Fuel Surcharge Waiver", "No upper limit on cashback"],
      bestFor: "Utility Bills & Offline Spends",
      description: "One of the best entry-level cashback cards in India with a simple and high reward structure."
    },
    { 
      name: "Amazon Pay ICICI", 
      type: "Shopping", 
      color: "bg-orange-500",
      rewards: ["5% Cashback for Prime Members on Amazon", "2% Cashback on 100+ partner merchants", "1% Cashback on all other spends"],
      fee: "Lifetime Free (No Annual Fee)",
      benefits: ["No Joining Fee", "No Annual Fee", "Earnings automatically credited as Amazon Pay Balance"],
      bestFor: "Amazon Loyalists",
      description: "A must-have lifetime free card for frequent Amazon shoppers, offering seamless rewards."
    },
    { 
      name: "SBI Card ELITE", 
      type: "Luxury", 
      color: "bg-slate-800",
      rewards: ["5X Reward Points on Dining, Departmental Stores", "2 Reward Points per ₹100 on other spends", "Welcome e-Gift Voucher worth ₹5,000"],
      fee: "₹4,999 + GST",
      benefits: ["Complimentary Movie Tickets worth ₹6,000/year", "6 Complimentary International Lounge Access", "Low Foreign Currency Mark-up"],
      bestFor: "Luxury Travel & Lifestyle",
      description: "A premium lifestyle card offering extensive travel benefits, movie rewards, and milestone bonuses."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 md:px-12">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            Explore Cards
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Discover the perfect card for your spending habits. Click a card to see full details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              layoutId={`card-${card.name}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedCard(card)}
              className={`p-8 rounded-[2rem] ${card.color} text-white shadow-xl h-64 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-12 bg-white/10 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-white/20 transition-colors" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {card.type}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-1">{card.name}</h3>
                <div className="text-sm opacity-70 flex items-center gap-2">
                  <Info className="w-3 h-3" />
                  Click for details
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              layoutId={`card-${selectedCard.name}`}
              className="fixed inset-x-6 top-[15%] bottom-[15%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] bg-white rounded-[2.5rem] shadow-2xl z-[70] overflow-hidden flex flex-col"
            >
              <div className={`p-8 ${selectedCard.color} text-white relative`}>
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest opacity-70">{selectedCard.type}</span>
                    <h2 className="text-3xl font-bold">{selectedCard.name}</h2>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">{selectedCard.description}</p>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Reward Structure
                  </h4>
                  <div className="grid gap-3">
                    {selectedCard.rewards.map((reward, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{reward}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {selectedCard.benefits.map((benefit, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-purple-500" />
                      Fees & Charges
                    </h4>
                    <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                      <p className="text-purple-900 font-bold">{selectedCard.fee}</p>
                      <p className="text-purple-600 text-xs mt-1">Best for: {selectedCard.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
