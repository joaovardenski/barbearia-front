import prumoIcon from "../../../assets/prumoIcon.png";
import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative
        flex items-center justify-center
        min-h-screen
        bg-linear-to-br from-primary via-primary-dark to-[#161515]
        animate-gradient
        text-white
        px-6
      "
    >
      <motion.div
        className="flex flex-col items-center text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={prumoIcon}
          alt="Prumo logo"
          className="w-40 mb-6"
          variants={itemVariants}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-yellow-light"
          variants={itemVariants}
        >
          Welcome to <span className="text-white">Prumo</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300"
          variants={itemVariants}
        >
          Manage appointments, clients and schedules in one place — so your
          barbershop runs smoothly every single day.
        </motion.p>

        <motion.div className="mt-10 flex gap-4" variants={itemVariants}>
          <Link
            to="/register"
            className="
              px-8 py-3 rounded-xl
              bg-yellow-light text-primary
              font-semibold text-lg
              hover:scale-105 hover:brightness-110
              transition-all duration-300 shadow-lg
            "
          >
            Get started free
          </Link>

          <a
            href="#features"
            className="
              px-8 py-3 rounded-xl
              border border-white/20
              text-white
              font-medium text-lg
              hover:bg-white/10
              transition-all duration-300
            "
          >
            Learn more
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
