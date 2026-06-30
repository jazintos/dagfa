import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../../data/stats";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-[#06402B] py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">

            By The Numbers

          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight">

            Trusted Intelligence.

            <br />

            Measurable Impact.

          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-9">

            Millions of data points transformed into
            actionable intelligence for governance,
            public policy and national development.

          </p>
        </motion.div>

        <div className="mt-24 divide-y divide-white/10">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-10 py-14 items-center"
            >

              {/* Number */}

              <div>

                <h3 className="text-6xl lg:text-7xl font-black text-yellow-400">

                  {inView && (
                    <>
                      {item.prefix}

                      <CountUp
                        end={item.value}
                        duration={2.8}
                        separator=","
                      />

                      {item.suffix}
                    </>
                  )}

                </h3>

              </div>

              {/* Title */}

              <div>

                <h4 className="text-3xl font-bold">

                  {item.title}

                </h4>

              </div>

              {/* Description */}

              <div>

                <p className="text-gray-400 leading-8">

                  {item.description}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}