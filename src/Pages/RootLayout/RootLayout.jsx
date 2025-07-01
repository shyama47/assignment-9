

import Navbar from '../../component/Navbar/Navbar';
import Footar from '../../component/Footar/Footar';
import { Outlet,useNavigation } from 'react-router';
import Loading from '../Loading';





const RootLayout =()=>{
    const {state} =useNavigation();
    return (
        <div>
            
            <Navbar></Navbar>
            {import.meta.env.VITE_name}
           <div className='w-11/12 mx-auto min-h-[calc(100vh-337px)]'>
             {state == 'loading' ? <Loading/> : <Outlet></Outlet>}
             
           </div>
            <Footar></Footar>
        </div>
    );
};

export default RootLayout;