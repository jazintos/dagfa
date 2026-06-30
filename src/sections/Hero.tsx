"use client";

import { motion } from "framer-motion";

import HeroContent from "@/components/hero/HeroContent";
import HeroButtons from "@/components/hero/HeroButtons";
import HeroStats from "@/components/hero/HeroStats";
import HeroNetwork from "@/components/hero/HeroNetwork";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_55%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            <HeroContent />

            <div className="mt-10">
              <HeroButtons />
            </div>

            <div className="mt-14">
              <HeroStats />
            </div>
          </motion.div>

                    {/* Right Visual */}
                    <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center"
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}