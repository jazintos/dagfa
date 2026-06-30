import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-36">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[5px] text-yellow-500 font-semibold">

            Partner With DAGFA

          </span>

          <h2 className="mt-6 text-white text-5xl lg:text-7xl font-black leading-tight">

            Helping Nigeria

            <br />

            Make Better Decisions

            <br />

            Through Data.

          </h2>

          <p className="max-w-3xl mx-auto mt-10 text-lg leading-9 text-gray-400">

            Whether you're a government institution,
            development partner, political organisation,
            corporate enterprise or research institution,
            DAGFA provides the intelligence, analytics and
            strategic insights needed to make confident,
            evidence-based decisions.

          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Us

              <ArrowRight size={20} />

            </NavLink>

            <NavLink
              to="/about"
              className="inline-flex items-center justify-center border border-white/20 hover:border-yellow-500 text-white hover:text-yellow-400 px-10 py-5 rounded-full transition-all duration-300"
            >
              Learn More
            </NavLink>

          </div>

        </motion.div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >

          <div>
            <h3 className="text-yellow-400 text-4xl font-black">
              36+
            </h3>

            <p className="text-gray-400 mt-2">
              States Covered
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 text-4xl font-black">
              15M+
            </h3>

            <p className="text-gray-400 mt-2">
              Data Points
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 text-4xl font-black">
              AI
            </h3>

            <p className="text-gray-400 mt-2">
              Powered Analytics
            </p>
          </div>

          <div>
            <h3 className="text-yellow-400 text-4xl font-black">
              24/7
            </h3>

            <p className="text-gray-400 mt-2">
              Intelligence Monitoring
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}