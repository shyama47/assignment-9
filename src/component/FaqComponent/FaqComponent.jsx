import React from 'react';

const FaqComponent = () => {
    return (
        <div>
 <div className="collapse collapse-plus border border-sky-300  my-2 hover:shadow-2xl">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">"Why is the App Details Page protected for logged-in users only?</div>
  <div className="collapse-content text-sm">The App Details Page is a protected route to ensure that only registered users can view complete app information. This is important for security and user management</div>
</div>
<div className="collapse collapse-plus border border-sky-300 mb-2 hover:shadow-2xl ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How can I log in using Google?</div>
  <div className="collapse-content text-sm">You can easily log in using Google by clicking the 'Google Login' button on the Login or Register page.</div>
</div>
<div className="collapse collapse-plus border border-sky-300 mb-2 hover:shadow-2xl">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Can I use the AppStore without registration?</div>
  <div className="collapse-content text-sm">You can browse apps without registration, but to install apps or submit reviews, registration is required</div>
</div>
<div className="collapse collapse-plus border border-sky-300 mb-2 hover:shadow-2xl ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How can I install an app from the AppStore?</div>
  <div className="collapse-content text-sm">You need to click on the 'Install' button from the App Details page. Make sure you are logged in to proceed.</div>
</div>
<div className="collapse collapse-plus border border-sky-300 mb-2 hover:shadow-2xl ">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Do I need an account to submit a review?</div>
  <div className="collapse-content text-sm">Yes, you must be logged in to submit a review and provide a rating for any app</div>
</div>
<div className="collapse collapse-plus border border-sky-300 mb-2 hover:shadow-2xl">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">What should I do if I forget my password?</div>
  <div className="collapse-content text-sm">You can use the 'Forget Password' option on the Login page to easily reset your password.</div>
</div>
<div className="collapse collapse-plus border border-sky-300 mb-2 hover:shadow-2xl">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How can I update my profile information?</div>
  <div className="collapse-content text-sm">You can update your profile picture and name by editing your Firebase authentication profile.</div>
</div>
<div className="collapse collapse-plus border border-sky-300  mb-2 hover:shadow-2xl">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Are the apps on this platform safe to download?</div>
  <div className="collapse-content text-sm">We manually verify each app, but always review the app details and ratings before installation to ensure safety.</div>
</div>
<div className="collapse collapse-plus border border-sky-300  mb-2 hover:shadow-2xl">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do I contact AppStore support?</div>
  <div className="collapse-content text-sm">You can reach us through the Contact Us page. We usually respond within 24 hours.</div>
</div>
        </div>
    );
};

export default FaqComponent;