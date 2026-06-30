import { motion } from "framer-motion";
import { ArrowRight, Cpu, BarChart3, Map, Radio } from "lucide-react";
import { NavLink } from "react-router-dom";

const features = [
  "Live Analytics",
  "Sentiment Intelligence",
  "Election Monitoring",
  "Predictive Models",
  "Heat Maps",
  "Policy Insights",
];

export default function Spectra() {
  return (
    <section className="relative bg-[#050505] py-36 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-yellow-500/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="uppercase tracking-[5px] text-yellow-500 font-semibold">

            Powered by DAGFA

          </span>

          <h2 className="mt-6 text-white font-black text-3xl lg:text-5xl leading-tight">

            SPECTRA™

          </h2>

          <h3 className="mt-4 text-yellow-400 text-2xl lg:text-2xl font-semibold">

            Political Intelligence Platform

          </h3>

          <p className="mt-8 text-lg leading-9 text-gray-400 max-w-3xl mx-auto">

            Transforming millions of digital conversations,
            governance datasets, media narratives and public
            sentiment into real-time strategic intelligence.

          </p>

          <NavLink
            to="/analytics"
            className="inline-flex items-center gap-3 mt-12 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Explore SPECTRA

            <ArrowRight size={18} />
          </NavLink>

        </motion.div>

        {/* Dashboard */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >

          <div className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-[0_30px_100px_rgba(0,0,0,.6)]">

            <img
              src="/images/spectra-dashboard.png"
              alt="SPECTRA Dashboard"
              className="w-full object-cover"
            />

          </div>

        </motion.div>

        {/* Features */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
        >

          {features.map((feature, index) => (

            <div
              key={feature}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-500 hover:bg-yellow-500/10 transition duration-300"
            >

              <div className="flex items-center gap-4">

                {index === 0 && <BarChart3 className="text-yellow-400" />}

                {index === 1 && <Radio className="text-yellow-400" />}

                {index === 2 && <Map className="text-yellow-400" />}

                {index >= 3 && <Cpu className="text-yellow-400" />}

                <h4 className="text-white text-lg font-semibold">

                  {feature}

                </h4>

              </div>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}