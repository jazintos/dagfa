import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function LeadershipPreview() {
  return (
    <section className="bg-charcoal py-36 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl">

              <img
                src="/images/leader.jpg"
                alt="DAGFA Leadership"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Floating Badge */}

            <div className="absolute -bottom-8 -right-8 bg-[#1B1B1B] border border-yellow-500/20 rounded-2xl p-6 shadow-2xl">

              <p className="text-yellow-400 uppercase tracking-[3px] text-xs">

                Leadership

              </p>

              <h3 className="text-white text-xl font-bold mt-2">

                Strategic Vision

              </h3>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[5px] text-yellow-500 font-semibold">

              Leadership

            </span>

            <h2 className="mt-5 text-3xl lg:text-4xl font-black text-white leading-tight">

              Leadership
              <br />
              Driven By
              <br />
              Evidence.

            </h2>

            <div className="mt-8 h-1 w-28 bg-yellow-500 rounded-full" />

            <p className="mt-10 text-lg leading-9 text-gray-300">

              DAGFA is guided by experienced professionals with
              expertise spanning governance, political strategy,
              research, technology, communications and advanced
              data analytics.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300">

              Through multidisciplinary leadership and strategic
              partnerships, the organisation delivers actionable
              intelligence that supports informed decision-making,
              policy development and sustainable national progress.

            </p>

            <NavLink
              to="/leadership"
              className="inline-flex items-center gap-3 mt-12 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >

              Meet Our Leadership

              <ArrowRight size={18} />

            </NavLink>

          </motion.div>

        </div>

      </div>

    </section>
  );
}