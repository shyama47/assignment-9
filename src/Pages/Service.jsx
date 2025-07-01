import React from 'react';
import { Helmet } from 'react-helmet-async';

const Service = () => {
    return (
        <section className='my-10 max-w-9/12 mx-auto'>
                    <Helmet>
                        <title>TermsOfservice || page</title>
                    </Helmet>
                    <h1 className='text-center text-blue-700 font-bold text-2xl'>Terms of Service</h1>
                    <p className='my-7'>Welcome to App Store BD! By accessing our website and using our services, you agree to be bound by the following Terms of Service. Please read them carefully.</p>
                    <div className='space-y-4'>
                        <h1 className='text-blue-500 text-2xl font-bold'>1. Acceptance of Terms</h1>
                        <p className='mb-5'>By using this website, you agree to comply with and be bound by these terms and all applicable laws and regulations..</p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-blue-500 text-2xl font-bold'>2. Use of Content</h1>
                        <p className='mb-5'>All content provided on this site is for informational purposes only. You may not copy, reproduce, or distribute any part without permission..</p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-blue-500 text-2xl font-bold'>3. User Responsibilities</h1>
                        <p className='mb-5'>You are responsible for your use of the site and for any content you share. Do not engage in any activity that is harmful or unlawful.</p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-blue-500 text-2xl font-bold'>4. Modifications</h1>
                        <p className='mb-5'>We reserve the right to modify these terms at any time. Changes will be posted on this page with a revised date.</p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-blue-500 text-2xl font-bold'>5. Contact</h1>
                        <p className='mb-5'>If you have any questions about our Terms of Service, feel free to contact us at<a className='text-blue-500 underline' href="https://mail.google.com/mail/u/1/#inbox">shyamasaha588@gmail.com</a></p>
                    </div>
                    <p className='text-center text-gray-400 mb-20 mt-10'>Last Updated: June 25, 2025</p>
                </section>
    );
};

export default Service;