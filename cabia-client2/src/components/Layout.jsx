import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-24 pb-12">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout