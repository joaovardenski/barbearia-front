import { Link } from 'react-router-dom'
import prumoIcon from '../../../assets/prumoIcon.png'

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 px-6 py-16 flex flex-col">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className='flex flex-col items-center justify-center md:items-start'>
          <img
            src={prumoIcon}
            alt="Prumo Logo"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Prumo helps barbershops manage appointments, schedules and teams
            with precision and simplicity.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Product
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-yellow-light transition">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-yellow-light transition">
                How it works
              </a>
            </li>
            <li>
              <a href="#for-who" className="hover:text-yellow-light transition">
                For who
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-yellow-light transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-light transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-yellow-light transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Get started
          </h4>
          <p className="text-sm mb-4">
            Start organizing your barbershop in minutes.
          </p>
          <Link
            to="/register"
            className="
              inline-block
              px-6 py-3 rounded-xl
              bg-yellow-light text-primary
              font-semibold text-sm
              hover:scale-105 hover:brightness-110
              transition-all duration-300 shadow-md
            "
          >
            Create free account
          </Link>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Prumo. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
