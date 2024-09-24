import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import './input.css'

function Layout() {
  return (
   <>
    <div className='layout'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
   </>
  )
}

export default Layout