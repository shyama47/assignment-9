import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';

const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target)
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const message = form.message.value;
		// console.log(name, email, message);
		toast.success('Thanks for you contacting us');
	}
	return (
		<section className="py-6 bg-gradient-to-r from bg-indigo-100 to-green-200 rounded-2xl my-20">
			<Helmet>
				<title>contact || page</title>
			</Helmet>
			<div className='mb-10'>
				<h1 className='text-blue-600 font-bold text-center  text-5xl'>Contact with us</h1>
				<p className='text-center mt-3'>Reach out to us anytime. We’re here to help and answer any question you might have!</p>
			</div>
			<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
				<div className="py-6 md:py-20 md:px-6">
					<div className="space-y-4">
						<p className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-blue-500">
								<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
							</svg>
							<span>Mymensingh,bangladesh</span>
						</p>
						<p className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6 text-pink-500">
								<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
							</svg>
							<span>+880 1308039598</span>
						</p>
						<p className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
							</svg>
							<span>shyamasaha588@gmail.com</span>
						</p>
					</div>
					<div className="mt-4">
						<div className='flex gap-5 justify-start '>
							<div className='bg-blue-500 rounded-full transfrom transition-transform duration-1000 hover:scale-110'>
								<NavLink to="https://www.facebook.com/shotondrila.shyama.2025"> <FaFacebookF className='w-[27px] h-[27px] text-white p-1 ' /></NavLink>
							</div>
							<div className='rounded-full flex justify-center items-center transfrom transition-transform duration-1000 hover:scale-110 '>
								<NavLink to=""><FaLinkedin className='w-[25px] h-[25px]' /></NavLink>
							</div>
							<div className='flex justify-center items-center group bg-white rounded-full transfrom transition-transform duration-1000 hover:scale-110'>
								<NavLink to="https://github.com/shyama47"><FaGithub className='w-[25px] h-[25px] group-text-white' /></NavLink>
							</div>
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-10 md:px-10 border rounded-2xl border-gray-300 shadow-2xl mb-10 bg-white">
					<label className="block">
						<span className="mb-1">Full name</span>
						<input type="text" placeholder="user name" required name='name' className="block w-full rounded-md shadow-sm border border-gray-300 px-2 py-3" />
					</label>
					<label className="block">
						<span className="mb-1">Email address</span>
						<input type="email" placeholder="your email address" name='email' required className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-2" />
					</label>
					<label className="block">
						<span className="mb-1">Message</span>
						<textarea rows="3" name='message' required className="block w-full border border-gray-300 rounded-md px-2 py-3"></textarea>
					</label>
					<button type="submit" className="self-center px-8 py-3 text-lg w-full rounded-xl  bg-gradient-to-r from bg-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:bg-indigo-600 hover:to-purple-500 text-white">Submit</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;