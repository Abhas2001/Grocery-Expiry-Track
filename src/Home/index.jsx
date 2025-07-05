import React from 'react';
import searchicon from '../assets/searchicon.png';
import filtericon from '../assets/filtericon.png'
import edit from '../assets/edit.png';
import deleteicon from '../assets/delete.png'
import { useState,useEffect } from 'react';

//Green (#28C76F) = Fresh

//Orange (#FF9F43) = Expiring Soon
//
//Red (#EA5455) = Expired
const Home = () => {

    const[showmodal,setshowmodal] = useState(true);

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
      <section className='w-full flex justify-center items-center '>
        <span className='font-bold text-[28px] text-[#2E2E2E]'>Fresh Keep</span>
      </section>

      <section className='p-6 w-full flex gap-2 justify-center items-center'>
        <div className='flex relative w-full'>
            <input className='w-full shadow-[0_0_0_2px_rgba(40,199,111,0.1)] p-2 border-[1px] rounded-4xl border-[#E0E0E0] placeholder:[#9E9E9E] text-[#2E2E2E] focus:[#28C76F]' placeholder='Search groceries…' type="text" />
            <img className='w-4 h-4 absolute right-2 top-3' src={searchicon} alt="" />
            </div>

            <div>
                <img className='w-4 h-4' src={filtericon} alt="" />
            </div>
      </section>
      <section className='w-full flex justify-center items-center p-6'>
      <section className='w-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-[1px] border-[#E0E0E0] p-4 flex flex-col rounded-xl '>
        <span className='text-[16px] font-bold text-[#2E2E2E]'>Milk</span>
        <span className='text-[14px] font-normal text-[#9E9E9E]'>Qty: 2</span>
        <span className='text-[14px] font-normal text-[#9E9E9E]'>Expires on: 10 Jul 2025</span>
        <div className='flex w-full items-center gap-4'>
        <span className="text-xs font-semibold text-[#28C76F] bg-[#E3F9EC] rounded-md">
  5 Days Left
</span>

            <span><img className='w-6 h-6' src={edit} alt="" /></span>
            <span><img className='w-6 h-6' src={deleteicon} alt="" /></span>
        </div>
      </section>
      </section>


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
