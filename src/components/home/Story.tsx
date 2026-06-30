import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Story() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F6] py-28">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[5px] text-sm text-yellow-600 font-semibold">

              About DAGFA

            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-[#111]">

              Intelligence.

              <br />

              Insight.

              <br />

              Impact.

            </h2>

            <div className="mt-8 h-1 w-28 bg-yellow-500 rounded-full" />

            <p className="mt-10 text-lg leading-9 text-gray-600">

              The Data Analytics Group for Asiwaju (DAGFA) is a strategic
              research and intelligence organisation dedicated to
              transforming complex data into actionable insights that
              strengthen governance, public policy and national
              development.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              Through advanced analytics, predictive intelligence,
              media monitoring and innovative technologies such as
              <span className="font-semibold text-black"> SPECTRA</span>,
              DAGFA empowers leaders with timely, evidence-driven
              decision support.

            </p>

            <NavLink
              to="/about"
              className="inline-flex items-center gap-3 mt-12 bg-black text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 group"
            >

              Learn More About DAGFA

              <ArrowRight
                className="group-hover:translate-x-1 transition"
                size={18}
              />

            </NavLink>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

              <img
                src="/images/nigeria-network.png"
                alt="Nigeria Data Intelligence"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-8 w-72">

              <p className="uppercase text-xs tracking-[3px] text-yellow-600 font-semibold">

                Core Mission

              </p>

              <h3 className="text-2xl font-bold mt-3">

                Data That Drives Decisions

              </h3>

              <p className="text-gray-600 mt-4 leading-7">

                Leveraging research,
                technology and analytics
                to provide strategic intelligence
                for national transformation.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}