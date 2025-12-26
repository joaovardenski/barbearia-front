import { Link } from 'react-router-dom'
import PrumoIcon from '../../../assets/prumoIcon.png'
import { motion } from 'framer-motion'

function CTASection() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex items-center justify-center text-center
        bg-[#0a0a0a] 
        text-white
        py-28
        px-6
        overflow-hidden
      "
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-125 h-125 bg-yellow-light/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        
        <motion.img
          src={PrumoIcon}
          alt="Prumo Logo"
          className="w-48 mb-12 drop-shadow-[0_0_30px_rgba(250,204,21,0.2)]"
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 150,
            damping: 15,
            duration: 0.8 
          }}
          viewport={{ once: true }}
        />

        <motion.h2
          className="text-4xl md:text-6xl font-black text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to organize your <br />
          <span className="text-yellow-light uppercase italic">barbershop?</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Start using Prumo today and take full control of your schedules,
          team and client experience.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-yellow-light/40 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            
            <Link
              to="/register"
              className="
                relative
                px-12 py-5 rounded-xl
                bg-yellow-light text-black
                font-black text-xl uppercase tracking-tight
                flex items-center justify-center
                overflow-hidden
              "
            >
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 3 }}
                className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-[-20deg] blur-md"
              />
              Get started free
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/login"
              className="
                px-12 py-5 rounded-xl
                border-2 border-white/10
                text-white font-bold text-lg
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              Sign in
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  )
}

export default CTASection