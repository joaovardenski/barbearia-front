import { HOW_IT_WORKS_DATA } from '../data/howItWorks'
import type { HowItWorks } from '../data/howItWorks'
import { motion, spring } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: 15,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: spring,
      stiffness: 100,
      damping: 12,
    },
  },
}

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative min-h-screen bg-[#0f0f0f] text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-light/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-24"
          variants={itemVariants}
        >
          <span className="text-yellow-light font-mono text-sm tracking-widest uppercase mb-4 block">
            Step by Step
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            How <span className="text-yellow-light">Prumo</span> works
          </h2>
          <p className="text-gray-400 text-lg">
            A simple workflow designed to keep your focus on the blade, while we handle the rest.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {HOW_IT_WORKS_DATA.map((card: HowItWorks, index: number) => (
            <StepCard
              key={card.step}
              index={index}
              {...card}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function StepCard({ step, icon, title, description, index }: HowItWorks & { index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.2 } 
      }}
      className="
        group relative
        bg-white/3
        border border-white/10
        rounded-3xl
        p-8
        backdrop-blur-md
        hover:border-yellow-light/30
        hover:bg-white/6
        transition-colors duration-500
      "
    >
      <div className="absolute inset-0 bg-radial-gradient from-yellow-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div
        className="
          absolute -top-5 -left-5
          w-12 h-12
          flex items-center justify-center
          rounded-2xl
          bg-yellow-light
          text-[#161515]
          font-black text-xl
          shadow-[0_0_20px_rgba(250,204,21,0.3)]
          rotate-[-10deg] group-hover:rotate-0
          transition-transform duration-300
        "
      >
        {step}
      </div>

      <div
        className="
          w-16 h-16
          flex items-center justify-center
          rounded-2xl
          bg-linear-to-br from-white/10 to-transparent
          text-yellow-light
          mb-8
          group-hover:scale-110 group-hover:rotate-3
          transition-transform duration-500
        "
      >
        <div className="scale-150">{icon}</div>
      </div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-light transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>

      {index < 2 && (
        <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-white/10">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
           </svg>
        </div>
      )}
    </motion.div>
  )
}

export default HowItWorksSection