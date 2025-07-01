
import { useLoaderData } from 'react-router';
import Productivity from '../component/Productivity/Productivity';
import Health from '../component/Health/Health';
import Education from '../component/Education/Education';
import Slider from '../component/Slider/Slider';
import TrandingApps from '../component/TrandingApps/TrandingApps';
import FaqComponent from '../component/FaqComponent/FaqComponent';
import { Helmet } from 'react-helmet-async';


const App =()=>{
    
    const apps =useLoaderData();
    const trandingApps =[...apps].sort((a,b)=>b.rating - a.rating).slice(0,4);
    const productivityApps =apps.filter((productivityApp )=>productivityApp.category == 'Productivity') 
    const healthApps =apps.filter((healthApp) =>healthApp.category == 'Health') 
    const educationApps =apps.filter((educationApp) =>educationApp.category == 'Education') 
    
    return (
      <main>
        <Helmet>
          <title>App || page</title>
        </Helmet>
        <section className='w-10/12 mx-auto mt-10'>
          <Slider></Slider>
        </section>
        <section>

         <div className='border border-green-200 bg-green-50 rounded-2xl my-10 p-5'>
            <h1 className='text-2xl font-bold border-b-2 border-green-100 p-3 text-green-500'>🚩Tranding Apps</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-3'>
            {
             trandingApps.map(item =><TrandingApps key={item.id} item={item}></TrandingApps>)  
            }
           </div>
           </div>


           <div className='border border-blue-200 bg-indigo-50 rounded-2xl my-10 p-5'>
            <h1 className='text-2xl font-bold border-b-2 border-blue-100 p-3 text-indigo-500'>🔷🔷 Productivity Apps</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-3'>
            {
              productivityApps.map(app =><Productivity key={app.id} app={app}></Productivity>)  
            }
           </div>
           </div>

           <div className='border border-purple-300 bg-purple-50 rounded-2xl my-10 p-5'>
            <h1 className='text-2xl font-bold border-b-2 border-purple-200 p-3 text-purple-500'>💪Health Apps</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-3'>
            {
              healthApps.map(healthApp =><Health key={healthApp.id} healthApp={healthApp}></Health>)  
            }
           </div>
           </div>

           <div className='border border-pink-300 bg-pink-50 rounded-2xl my-10 p-5'>
            <h1 className='text-2xl font-bold border-b-2 border-pink-200 p-3 text-pink-500'>📚 Education Apps</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-3'>
            {
             educationApps.map(educationApp =><Education key={educationApp.id} educationApp={educationApp} ></Education>)  
            }
           </div>
           </div>
           <div className='border border-sky-300 bg-sky-50 rounded-2xl mb-10 px-4'>
            <h1 className='text-2xl font-bold text-center mt-4  text-sky-400'>FAQ Question And Answer</h1>
            <div className='my-5'>
              <FaqComponent></FaqComponent>
            </div>
           </div>
        </section>
       </main>
    );
};

export default App;