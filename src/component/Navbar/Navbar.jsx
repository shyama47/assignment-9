import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Pages/AuthContext';
import userImage from '../../assets/userImage.jpg'
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext)
  // console.log(user)
  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      Swal.fire({
  title: "Good job!",
  text: "Logout succesfully !! You clicked the button!",
  icon: "success"
});
    })
    .catch(error =>{
      console.log(error)
    })
  }
  const links = <div className='flex flex-col md:flex-row space-y-3 md:gap-10 font-medium text-[18px] text-gray-500 '>
    <NavLink className={({ isActive }) => (isActive ? 'md:text-blue-700 md:border-b-2 md:pb-2 md:rounded-box' : '')} to='/' >App</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'md:text-blue-700 md:border-b-2 md:pb-2 md:rounded-box' : '')} to='/profile'>My Profile</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'md:text-blue-700 md:border-b-2 md:pb-2 md:rounded-box' : '')} to='/about'>About Us</NavLink>
  </div>
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 h-auto p-2 shadow">
            {
              links
            }
          </ul>
        </div>
        <div className='flex gap-3'>
          <img className='w-10 hidden md:block' src='https://img.icons8.com/?size=128&id=jbsjruPQ2EJI&format=png' alt="" />
          <h1 className="text-2xl font-bold text-blue-700">AppStore</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className='relative group'>
          <div className='border rounded-full bg-gray-300 p-1 border-gray-200'>
            <img className='w-[40px] h-[40px]' src={`${user ? user.photoURL : userImage}`} alt="" />
          </div>
         {user && ( //sudumatro user login kora thakle tooltip dekhabe

            <div className='absolute bottom-px -left-16 -translate-x-1/2  mb-2 p-2 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap z-10'>
              {user.displayName}
            </div>
          )}
        </div>

        {
          user ? (
            <button onClick={handleLogOut} className='border bg-gray-700 text-white px-5 py-2 rounded-lg hover:rounded-full cursor-pointer hover:bg-blue-600'>Logout</button>
          )

            : (
              <Link to='/login' className='btn bg-blue-700 text-white px-5'>Login</Link>
            )
        }
      </div>
    </div>
  );
};

export default Navbar;