import React from 'react';

import { useState,useEffect } from 'react';
import Header from '../Header';
import Items from '../Items';

//Green (#28C76F) = Fresh

//Orange (#FF9F43) = Expiring Soon
//
//Red (#EA5455) = Expired
const Home = () => {

    const[showmodal,setshowmodal] = useState(false);

    const handleshowmodal = () =>{
        setshowmodal(true);
    }

    const handlehidemodals = () =>{

        console.log("running");
        setshowmodal(false);
    }

 
        console.log(showmodal,"Showmodal");
 

   

  return (
    <div className="w-full h-screen bg-[#F7F8FA]">
     
<Header/>
    
    
<Items/>

      <section className={`fixed transition-all duration-500 ease-in-out ${showmodal?'bottom-0 z-50':'bottom-[-500px]'} shadow-2xl w-full bg-white rounded-2xl flex flex-col gap-6 p-4`}>

        <div>
            <span className='text-lg font-semibold text-[#2E2E2E]'>Add Grocery Item   </span>
        </div>
        <div className='flex gap-1'>
            <span className='text-sm font-normal text-[#2E2E2E]'>Item Name:</span>
            <input className='border-[1px] border-[#E0E0E0] rounded-2xl' type="text" />
        </div>

        <div className='flex gap-1'>
            <span className='text-sm font-normal text-[#2E2E2E]'>Quantity:</span>
            <input className='border-[1px] border-[#E0E0E0] rounded-2xl' type="text" />
        </div>

        <div className='flex gap-1'>
            <span className='text-sm font-normal text-[#2E2E2E]'>Expiry Date:</span>
            <input className='border-[1px] border-[#E0E0E0] rounded-2xl' type="text" />
        </div>
      
      <div className='flex gap-4'>
        <button onClick={()=>handlehidemodals()} className='text-[#6E6E6E] text-sm '>Cancel</button>

        <button onClick={()=>handlehidemodals()} className='bg-[#28C76F] text-sm py-1 px-2 rounded-md'><span className='text-sm text-white'>Save</span></button>
      </div>

        
      <div className='flex gap-4'>
        <button onClick={()=>handlehidemodals()} className='text-[#6E6E6E] text-sm '></button>

        <button onClick={()=>handlehidemodals()} className='text-[#28C76F] text-sm'></button>
      </div>
      </section>
     

      <section className='fixed bottom-0 w-full flex justify-center items-center'>
        <div onClick={()=>handleshowmodal()} className='text-white bg-[#28C76F] rounded-full w-8 h-8 flex justify-center items-center font-medium'>

            <span className='text-xl'>+</span>
            
        </div>
     
      </section>
    </div>
  );
};

export default Home;
