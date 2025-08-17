import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <section className='my-10 w-11/12 md:max-w-9/12 mx-auto'>
            <Helmet>
                <title>privacy || page</title>
            </Helmet>
            <h1 className='text-left md:text-center text-blue-700 font-bold text-2xl'>Privacy Policy</h1>
            <p className='my-7'>At App Store BD, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>1. Information We Collect</h1>
                <p className='mb-5'>We may collect basic information such as your name, email address, and usage data when you interact with our website.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>2. How We Use Your Information</h1>
                <p className='mb-5'>Your information is used to improve our services, provide support, and personalize your experience. We do not sell or share your personal data with third parties.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>3. Cookies</h1>
                <p className='mb-5'>Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>4. Data Security</h1>
                <p className='mb-5'>We implement strong security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>5. Third-Party Links</h1>
                <p className='mb-5'>Our site may contain links to external websites. We are not responsible for the privacy practices of those sites.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>6. Your Consent</h1>
                <p className='mb-5'>By using our site, you consent to our Privacy Policy.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>7. Changes to This Policy</h1>
                <p className='mb-5'>We may update this policy at any time. Changes will be posted on this page with the updated date.</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-blue-500 text-2xl font-bold'>8. Contact Us</h1>
                <p className='mb-5'>If you have any questions regarding this Privacy Policy, please email us at <a className='text-blue-500 underline' href="https://mail.google.com/mail/u/1/#inbox">shyamasaha588@gmail.com</a></p>
            </div>
            <p className='text-center text-gray-400 mb-20 mt-10'>Last Updated: June 25, 2025</p>
        </section>
    );
};

export default PrivacyPolicy;