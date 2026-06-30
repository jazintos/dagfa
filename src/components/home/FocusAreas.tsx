import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const focusAreas = [
  {
    title: "Election Intelligence",
    image: "/images/focus-election.jpg",
    description:
      "Real-time monitoring of electoral trends, voter behaviour, political actors and campaign performance.",
  },
  {
    title: "Policy Research",
    image: "/images/focus-policy.jpg",
    description:
      "Evidence-driven policy analysis, governance research and strategic recommendations for informed decision-making.",
  },
  {
    title: "Media Monitoring",
    image: "/images/focus-media.jpg",
    description:
      "Continuous tracking of news, television, radio and digital conversations to identify emerging narratives.",
  },
  {
    title: "Public Sentiment",
    image: "/images/focus-sentiment.jpg",
    description:
      "AI-powered analysis of public opinion across social media, surveys and digital communities.",
  },
  {
    title: "Predictive Analytics",
    image: "/images/focus-predictive.jpg",
    description:
      "Forecasting trends using machine learning, statistical models and behavioural intelligence.",
  },
  {
    title: "Governance Analytics",
    image: "/images/focus-governance.jpg",
    description:
      "Measuring public programmes, institutional performance and governance impact using data intelligence.",
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-[#F8F8F6] py-36">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="uppercase tracking-[5px] text-yellow-600 font-semibold">

            What We Do

          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight text-[#111]">

            Delivering Strategic
            Intelligence Across
            Multiple Domains

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9">

            DAGFA combines research, technology and advanced analytics to
            generate reliable intelligence that supports governance,
            policy development, political strategy and national growth.

          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {focusAreas.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .1,
                duration: .7,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#111]">

                  {item.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {item.description}

                </p>

                <NavLink
                  to="/initiatives"
                  className="inline-flex items-center gap-2 mt-8 font-semibold text-yellow-600 hover:text-black transition"
                >

                  Learn More

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </NavLink>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}