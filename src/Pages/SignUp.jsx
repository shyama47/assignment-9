import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
	const { createUser,updateUser,setUser } = useContext(AuthContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const photo = form.photo.value;
		const password = form.password.value;
		if (password.length < 6) {
			toast('password must be equal or grater then 6')
			return;
		}
		if(!/[a-z]/.test(password)){
			toast('password must be contain at last one lower case letter')
			return;
		}
		if(!/[A-Z]/.test(password)){
			toast('password must be contain at last one upper case letter')
			return;
		}
		// console.log(name, email, photo, password)
		createUser(email, password)
		.then(result=>{
					// console.log(result.user)
					const user =result.user;
					toast('User sign up successfully')
					updateUser({displayName :name,photoURL : photo})
					.then(()=>{
						setUser({...user,displayName :name,photoURL : photo})
					})
					.catch(error =>{
						console.log(error)
						setUser(user)
					})
				})
				.catch(error=>{
					console.log(error)
				})
	}
	return (
		<div className="w-full max-w-md mx-auto my-10 p-4 rounded-md shadow sm:p-8 bg-black text-white">
			<Helmet>
				<title>signUp || page</title>
			</Helmet>
			<h2 className="mb-3 text-3xl font-semibold text-center">Create a new account</h2>
			<form onSubmit={handleSubmit} className="space-y-8">
				<div className="space-y-4">
					<div className="space-y-2">
						{/* name */}
						<label htmlFor="name" className="block text-sm">Name</label>
						<input type="text" name="name" id="name" placeholder="user name" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-2">
						{/* email */}
						<label htmlFor="email" className="block text-sm">Email address</label>
						<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-2">
						{/* photo url */}
						<label htmlFor="text" className="block text-sm">PhotoURL</label>
						<input type="text" name="photo" placeholder="Photo URL"  required className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-2">
						<div>
							{/* password */}
							<label htmlFor="password" className="text-sm">Password</label>
							<input type="password" name="password" id="password" required placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
						</div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50 mt-3 cursor-pointer">Sign Up</button>
					</div>
				</div>
				<div className="flex items-center w-full my-4">
					<hr className="w-full dark:text-gray-600" />
					<p className="px-3 dark:text-gray-600">OR</p>
					<hr className="w-full dark:text-gray-600" />
				</div>

				<div className=" space-y-4">
					<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md  focus:ring-offset-1 border-gray-600 hover:bg-violet-600">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
						</svg>
						<p>Sign Up with Google</p>
					</button>
				</div>
				<p className="text-sm text-center dark:text-gray-600">Already have an account?
					<Link to='/login' className="underline">Login here</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;