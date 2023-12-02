import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="header">
          <NavLink to='/' className='w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md'>
              <p className="blue-gradient_text">AO</p>
          </NavLink>
          <nav className="flex text-lg gap-7 font-medium">
              <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500': 'text-black'}>
                  About
              </NavLink>
              <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500': 'text-black'}>
                  Projects
              </NavLink>
          </nav>
    </header>
  )
}

export default NavBar