import React from 'react';
import { FaFacebookF, FaGithub, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footar = () => {
    return (
       <footer>
	<div className="container flex flex-col justify-between px-4  py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 bg-gray-50 border-t-1">
		<div className="lg:w-1/3">
				<span className="text-2xl font-semibold text-blue-800">App Store BD</span>
			<p className=' mt-3 w-[350px]'> An App Store is a digital distribution platform that serves as a centralized marketplace for software application.</p>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-4 gap-y-8 lg:w-2/3 md:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide text-xl font-medium underline">Quick links</h3>
				<ul className="space-y-1">
					<li className='text-[16px]'><NavLink className='flex items-center gap-2 hover:text-blue-500' to='/'>📱 Apps</NavLink></li>
					<li className='text-[16px]'><NavLink className='flex items-center gap-2 hover:text-blue-500' to='/about'> <img className='w-6 h-6' src='https://img.icons8.com/?size=160&id=YGCpatc8SFgI&format=png' alt="" />About </NavLink></li>
					<li className='text-[16px]'><NavLink className='flex items-center gap-2 hover:text-blue-500' to='/contact'> 📞 Contact us</NavLink></li>
				</ul>
			</div>
			
			<div className="space-y-3">
				<h3 className=" text-xl font-medium underline">Resources</h3>
				<ul className="space-y-1">
					<li>
						<NavLink className='hover:text-blue-500' to='/service'>🈂️ Terms Of Service</NavLink >
					</li>
					<li>
						<NavLink className='hover:text-blue-500' to='/privacy'>🔒privacy policy</NavLink >
					</li>
					<li>
						<NavLink to='devoloper' >💻 Devoloper Resources</NavLink >
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className=" font-bold text-xl underline"> Follow me</div>
				 <div className='flex gap-5 justify-start'>
                <div className='bg-blue-600 p-1 rounded-full '>
                   <NavLink to="https://www.facebook.com/shotondrila.shyama.2025"> <FaFacebookF className='w-[24px] h-[24px] text-white ' /></NavLink>
                </div>
                <div className='bg-red-600 rounded-full flex justify-center items-center  '>
                    <NavLink to="https://www.youtube.com/"><FaYoutube className='w-[30px] h-[18px] text-white' /></NavLink>
                </div>
                <div className='flex justify-center items-center group bg-white rounded-full'>
                    <NavLink to="https://github.com/shyama47"><FaGithub className='w-[30px] h-[30px] group-text-white' /></NavLink>
                    {/* <PiGithubLogoFill className='text-white w-[24px] h-[24px]'/> */}
                </div>
            </div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-gray-500 text-left pl-3 md:text-center bg-gray-300">© 2025 App Store Bd. All rights reserved.</div>
</footer>
    );
};

export default Footar;