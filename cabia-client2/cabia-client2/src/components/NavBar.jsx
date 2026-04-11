import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
]

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-semibold transition ${
    isActive
      ? 'bg-red-500 text-white'
      : 'text-white/70 hover:bg-white/10 hover:text-white'
  }`

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Echo Logo" className="h-10 w-10" />

          <div>
            <p className="text-lg font-bold text-white">Echo</p>
            <p className="text-xs text-white/50">Music Studio</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      
    </header>
  )
}

export default NavBar