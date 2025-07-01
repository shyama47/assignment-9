import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
	const navigate =useNavigate();
    return (
        <section className=" min-h-screen p-6 lg:p-16 bg-gray-200 ">
			<Helmet>
				<title>Error || page</title>
			</Helmet>
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center ">
		<img src="https://img.icons8.com/?size=100&id=nTlvAWQDMdKt&format=png&color=000000" alt="" />
		<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
		<button onClick={()=>navigate('/')} className="flex items-center gap-2 px-8 py-3 font-semibold rounded-xl cursor-pointer bg-violet-600 text-gray-50"> <FaArrowLeft /> Back to homepage</button>
	</div>
</section>
    );
};

export default ErrorPage;