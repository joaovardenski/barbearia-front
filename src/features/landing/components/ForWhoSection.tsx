import { FOR_WHO_DATA } from '../data/forWhoData'
import type { ForWho } from '../data/forWhoData'
import { motion, easeOut, spring} from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: easeOut}
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    skewX: -3,
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      type: spring,
      stiffness: 80,
      damping: 15,
    },
  },
}

function ForWhoSection() {
  return (
    <section
      id="for-who"
      className="relative min-h-screen bg-[#141414] text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-yellow-light/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tight">
            Built for <span className="text-yellow-light uppercase">everyone</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Prumo was designed to support every role involved in your daily operation, 
            from the management desk to the barber's chair.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {FOR_WHO_DATA.map((item: ForWho) => (
            <RoleCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function RoleCard({ icon, title, description }: ForWho) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -12,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="
        group relative
        bg-[#1c1c1c]
        border border-white/10
        rounded-3xl
        p-10
        flex flex-col items-center text-center
        overflow-hidden
        transition-all duration-500
        hover:border-yellow-light/40
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
      "
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-yellow-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="
          w-20 h-20
          flex items-center justify-center
          rounded-full
          bg-yellow-light/5
          text-yellow-light
          mb-8
          border border-yellow-light/10
          group-hover:bg-yellow-light
          group-hover:text-primary-dark
          group-hover:scale-110
          transition-all duration-500
          shadow-lg
        "
      >
        <div
          className="
            scale-[1.8]
            text-yellow-light
            group-hover:text-primary
            group-hover:rotate-10
            transition-all
            duration-500
          "
        >
          {icon}
        </div>
      </motion.div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-light transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-yellow-light/2 pointer-events-none" />
    </motion.div>
  )
}

export default ForWhoSection