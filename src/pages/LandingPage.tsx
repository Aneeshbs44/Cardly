/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Coins, Zap, Brain, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CreditCardComponent } from "../components/CreditCardComponent";
import { Navbar } from "../layouts/Navbar";

const Hero = ({ onEmailSubmit }: { onEmailSubmit: (email: string) => void }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onEmailSubmit(email);
      navigate("/analyzer");
    }
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 px-6 md:px-12 min-h-screen flex flex-col md:flex-row items-center justify-center md:gap-24 overflow-hidden bg-[#F9F9FB]">
      <motion.div style={{ y, opacity, scale }} className="max-w-3xl z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-bold uppercase tracking-wider mb-8"
        >
          Earn up to 20% by spending money <button onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })} className="bg-purple-100 px-2.5 py-1 rounded-full text-[11px] cursor-pointer hover:bg-purple-200 transition-colors">MORE</button>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-9xl font-bold text-gray-900 leading-[0.85] tracking-tighter mb-10"
        >
          Get more out <br /> of your money.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 leading-relaxed"
        >
          The modern payment platform for keeping everything in one place. Profit for spending your money with many attractive offers.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="w-full px-8 py-5 rounded-full bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-base"
            />
            <button type="submit" className="absolute right-2 top-2 bottom-2 px-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-base font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Get started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        className="relative mt-16 md:mt-0 w-full md:w-auto flex justify-center items-center"
      >
        <div className="relative w-full max-w-[350px] sm:max-w-[450px] h-[450px] sm:h-[550px]">
          <div className="absolute inset-0 bg-purple-500/10 blur-[60px] sm:blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-56 sm:w-72 h-80 sm:h-[450px] bg-gray-900/5 rounded-t-full blur-sm transform rotate-12" />
          <motion.div
            layoutId="hero-card-wrapper"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 4, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
          >
            <CreditCardComponent 
              layoutId="hero-card" 
              className="w-80 h-48 sm:w-96 sm:h-56" 
              transition={{ 
                duration: 3.5, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { 
      icon: Coins, 
      title: "💰 Maximize Your Savings", 
      desc: "Automatically finds the best credit card + platform combination so you always get the lowest price." 
    },
    { 
      icon: Zap, 
      title: "⚡ Compare Instantly", 
      desc: "No more checking Amazon, Flipkart, and bank offers manually — we do it in seconds." 
    },
    { 
      icon: Brain, 
      title: "🧠 Smart Card Recommendations", 
      desc: "Uses the cards you already own and tells you which one saves the most." 
    },
    { 
      icon: Target, 
      title: "🎯 One Place for All Offers", 
      desc: "View all platform deals, bank discounts, and final prices in a single clean view." 
    },
  ];

  return (
    <section id="what-we-do" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">What we actually do</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">We simplify your shopping experience by bringing intelligence to your wallet.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition-colors group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <f.icon className="text-purple-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { 
      title: "Save More", 
      desc: "Get the best discounts every time you shop with our intelligent offer matching engine.",
      icon: "💰"
    },
    { 
      title: "Smart Analysis", 
      desc: "We analyze your cards to find the best offers tailored specifically to your wallet.",
      icon: "🧠"
    },
    { 
      title: "Real-time Data", 
      desc: "Always up-to-date with the latest platform deals and bank offers across the web.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Core Benefits</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Why thousands of users trust Cardly to optimize their daily spending.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-6">{b.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{b.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LandingPage = ({ onEmailSubmit }: { onEmailSubmit: (email: string) => void }) => {
  return (
    <>
      <Navbar />
      <Hero onEmailSubmit={onEmailSubmit} />
      <BenefitsSection />
      <FeaturesSection />
    </>
  );
};
