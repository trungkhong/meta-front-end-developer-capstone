import { Outlet } from 'react-router-dom';

import Nav from './Nav'
import Footer from './Footer'

 
const Layout = () => {
    return (
      <div className="wrapper">
        <Nav />
        <main className='main'>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  }
  
  export default Layout