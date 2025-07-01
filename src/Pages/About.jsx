import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='my-20'>
            <Helmet>
        <title>About || page</title>
            </Helmet>
            <div className='text-center space-y-6'>
                <h1 className='text-blue-600 text-2xl font-bold'>About Us</h1>
                <p className='max-w-7/12 mx-auto'>Welcome to our App Explorer! We aim to bring you the most innovative, useful, and trending applications in one place. Whether you're looking for productivity tools, entertainment, or utilities – we’ve got something for everyone.</p>
            </div>
           <div className='grid grid-cols-1 mb-3 md:gap-5 md:grid-cols-3 mt-10'>
             <div className='border rounded-2xl text-center p-7 bg-white shadow-md transform transition-transform duration-1000 hover:scale-105'>
                <h1 className='text-2xl text-blue-500 mb-3'>🚀 Our Mission</h1>
                <p>To connect users with powerful apps that simplify life, boost productivity, and spark creativity.</p>
            </div>
             <div className='border rounded-2xl text-center p-7 bg-white shadow-md transform transition-transform duration-1000 hover:scale-105'>
                <h1 className='text-2xl text-green-500 mb-3'>🎯 Our Vision</h1>
                <p>Become a leading platform for app discovery where innovation meets usability.</p>
            </div>
             <div className='border rounded-2xl text-center p-7 bg-white shadow-md transform transition-transform duration-1000 hover:scale-105'>
                <h1 className='text-2xl text-violet-500 mb-3'>🤝 Our Promise</h1>
                <p>Curated content, honest reviews, and an easy-to-use platform you can trust.</p>
            </div>
           </div>
        </div>
    );
};

export default About;