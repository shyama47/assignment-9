import React from 'react';
import { toast } from 'react-toastify';

const CardDetails = ({ catchData }) => {
    console.log(catchData)
    const handleReview =(e)=>{
        e.preventDefault();
        const message =e.target.message.value;
       toast.success('Thanks for your feedback')
    }
    // r map,filter use korle array pabo array er modde onk gula obj thake tai array destructure kore nibo index num diye||

    // const {name, developer, thumbnail, banner, downloads, category, rating, description, features, reviews}=catchData[0];

    // find use korle ekta obj direct pabo
    const { name, developer, thumbnail, banner, downloads, category, rating, description, features, reviews } = catchData;
    return (
        
       <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                
                {/* Banner Section */}
                <div className="w-full h-48 md:h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                        src={banner} 
                        alt={`${name} Banner`} 
                        className="" 
                    />
                </div>

                <div className="p-6 md:p-8">
                    {/* App Thumbnail, Name, Developer, Category Section */}
                    <div className="flex items-center mb-6 border-b pb-6 border-gray-200">
                        <img 
                            src={thumbnail} 
                            alt={`${name} Thumbnail`} 
                            className="w-20 h-20 rounded-xl shadow-md mr-4 flex-shrink-0" 
                        />
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{name}</h1>
                            <p className="text-lg text-gray-600">Developer: {developer}</p>
                            <p className="text-md text-gray-500">Category: {category}</p>
                        </div>
                    </div>

                    {/* Rating, Downloads & Install Button Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                        <div className="flex items-center mb-4 md:mb-0">
                            <span className="text-2xl text-yellow-500 mr-2">⭐</span>
                            <span className="text-xl font-semibold text-gray-700">{rating} Rating</span>
                            <span className="text-lg text-gray-500 ml-4">|</span>
                            <span className="text-lg text-gray-700 ml-4">{downloads} Downloads</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                            Install App
                        </button>
                    </div>

                    {/* Description Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
                        <p>{description}</p>
                    </section>

                    {/* Features Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Reviews Section */}
                    <section>
                        <h1 className='text-2xl font-semibold text-gray-700 mb-4'>Reviews</h1>
                       
                         {
                            reviews.map(review =>
                                <div key={review.id} className='border border-gray-200 p-3 rounded-lg bg-gray-50 space-y-2'>
                            <div className='flex gap-3'>
                                <h1 className='font-semibold'>{review.user}</h1>
                           {
                           [...Array(5)].map((_,index)=><span key={index}>{index < review.rating ? '⭐' : ''}</span>)
                           }
                            </div>
                            <p>{review.comment}</p>


                            <form onSubmit={handleReview} className="flex flex-col w-full">
			<textarea rows="3" placeholder="Message..." name='message' required className="p-4 rounded-md resize-none border  text-gray-800 bg-gray-50"></textarea>
			<button type="submit" className="py-4 my-8 font-semibold rounded-md border-none text-white bg-violet-600">Submit review</button>
		</form>
                                </div> 
                            )
                            }
                        
                  
                    </section>
                    
                   
                </div>
            </div>
        </div>
        

    );
};

export default CardDetails;