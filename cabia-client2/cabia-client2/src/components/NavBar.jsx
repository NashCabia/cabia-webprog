import { NavLink } from 'react-router-dom'

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
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white font-bold">
            E
          </div>
          <div>
            <p className="font-bold text-white">Echo</p>
            <p className="text-xs text-white/50">Music Studio</p>
          </div>
        </NavLink>

        {/* LINKS */}
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