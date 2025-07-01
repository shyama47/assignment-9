import React from 'react';
import { Link } from 'react-router';

const TrandingApps = ({item}) => {
    const{name,thumbnail,rating,downloads,id} =item;
    return (
        <div>
             <div className='rounded-3xl bg-white my-5 text-center space-y-3 p-8 shadow-md transform transition-transform duration-1000 hover:scale-105 '>
          <div className='flex justify-center items-center  p-0'>
            <img className='w-[150px] h-[150px] rounded-full shadow-md ' src={thumbnail} alt="" />
          </div>
          <h1 className='text-blue-500 text-xl font-bold'>{name}</h1>
          <h5 className='font-medium'>Rating : {rating}</h5>
          <p> Downloads :{downloads}</p>
           <Link to={`/cardDetails/${id}`} className='px-5 py-2 text-white bg-gradient-to-r from bg-purple-500 to-indigo-600 hover:bg-gradient-to-r from  hover:bg-indigo-600 hover:to-purple-600 rounded-4xl cursor-pointer'>View Details</Link>
        </div>
        </div>
    );
};

export default TrandingApps;