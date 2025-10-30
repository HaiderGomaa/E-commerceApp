import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'


export default function Layout() {
  return (
    <div>
      <Navbar/>  
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

