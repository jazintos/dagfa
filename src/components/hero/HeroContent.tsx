import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-xl"
    >
    {/*  <p className="uppercase tracking-[0.45em] text-yellow-500 text-sm mb-6">
        Data Analytics Group for Asiwaju
  </p> */}

      <h1 className="font-play font-bold text-white leading-[0.95] tracking-tight">
        <span className="block text-4xl lg:text-6xl">
          TURNING DATA
        </span>

        <span className="block text-4xl lg:text-6xl">
          INTO
        </span>

        <span className="block text-4xl lg:text-6xl text-yellow-500">
          DIRECTION.
        </span>
      </h1>

      <p className="mt-8 text-lg leading-9 text-white/70 max-w-lg">
        Intelligence powering political engagement,
        governance and strategic decision-making through
        advanced analytics and AI.
      </p>
    </motion.div>
  );
}