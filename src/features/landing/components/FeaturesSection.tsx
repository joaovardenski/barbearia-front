import { FEATURES_DATA } from "../data/featuresData"
import type { Feature } from "../data/featuresData"
import { motion, spring } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20 
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: spring,
      stiffness: 120,
      damping: 14,
    },
  },
}

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative min-h-screen bg-[#111111] text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-yellow-light/20 to-transparent" />

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Everything your <br />
            <span className="text-yellow-light uppercase tracking-tighter italic">barbershop</span> needs
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Prumo centralizes your daily operations so you can focus on what
            really matters — your clients and your craft.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES_DATA.map((card: Feature) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturesSection

export function FeatureCard({ icon, title, description }: Feature) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="
        group relative
        bg-[#1a1a1a]
        border border-white/5
        rounded-2xl
        p-8
        overflow-hidden
        transition-colors duration-300
        hover:border-yellow-light/20
        hover:bg-[#222222]
      "
    >
      <div className="absolute -inset-px bg-linear-to-br from-yellow-light/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className="
          relative z-10
          w-14 h-14
          flex items-center justify-center
          rounded-2xl
          bg-white/5
          text-yellow-light
          mb-6
          group-hover:bg-yellow-light/10
          group-hover:scale-110
          group-hover:rotate-[5deg]
          transition-all duration-300
        "
      >
        <div className="scale-125">{icon}</div>
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-light transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-light group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}