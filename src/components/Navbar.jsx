import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-b-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo-removebg-preview.png"
              alt="Kuphi Coffee House"
              className="h-16 md:h-20 w-auto object-contain transition-all duration-300 ease-out"
              onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=200&auto=format&fit=crop'}}
            />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-[#3b2f2f] hover:text-[#2f2424] transition-all duration-300 ease-out pb-1 ${isActive ? 'border-b-2 border-[#3b2f2f]' : 'border-b-2 border-transparent hover:border-[#3b2f2f]/60'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer text-[#3b2f2f] font-medium px-3 py-2 rounded-lg border border-black/10 hover:bg-[#f5e6cc]/60 transition-all duration-300 ease-out">Menu</summary>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-black/5 p-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `block px-3 py-2 rounded-lg text-[#3b2f2f] hover:bg-[#f5e6cc]/60 transition-all duration-300 ease-out ${isActive ? 'bg-[#f5e6cc]' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </details>
          </div>
        </div>
      </nav>
    </header>
  )
}
