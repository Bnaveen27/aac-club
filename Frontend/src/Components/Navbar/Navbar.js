import React from 'react'
import { MdManageSearch, MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import './Navbar.css';
import{Link} from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      <nav>
        <div className="container ">
          {/* logo section */}
          <div className='text-2xl flex items-center gap-2 font-bold py-8'>
            <p className='text-secondary'>AAC</p>
            <p>INNOVATORS CLUB</p>
          </div>
          {/* menu section */}
          <div className='hidden md:block menu-list'>
            <ul className='menu-bar'>
                 <Link to='/' >Home</Link>
                 <Link to='/src/Pages/About'>About</Link>
                 <Link to='/src/Pages/Members'>Members</Link>
                 <Link to='/src/Pages/Gallery'>Gallery</Link>
                 <Link to='/src/Pages/Contactus'>Contact us</Link>
            </ul>
          </div>
          {/* icon section */}
          <div className='flex items-center gap-4 '>
            <button className='text-2xl hover:text-white duration-200 hidden md:block btn' >
              <MdManageSearch />
            </button>
            <Link to='/src/Pages/Login'>
             <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
              Login
            </button>
            </Link>
            {/* <Link to='/src/Pages/Registration'>
            <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block'>
              Sign up
            </button></Link> */}

          </div>

          {/* mobile hamburger menu section */}

          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div>
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu open={open} />

    </>

  );
}

export default Navbar
