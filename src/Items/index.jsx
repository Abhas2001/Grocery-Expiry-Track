import React from 'react'

import edit from '../assets/edit.png';
import deleteicon from '../assets/delete.png'
import { useContext } from 'react';
import { userContext } from '../Home';

const Items = () => {
    const{data} = useContext(userContext);

    const result = data.filter((x)=>x.itemname.length>0)
    console.log(result,"datahaibeta");
  return (
 <>
 {result.length>0?
   <section className='w-full flex flex-col justify-center items-center p-6 gap-2 overflow-y-auto overflow-x-hidden'>
    { result.map((x)=>(

  
      <section className='w-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-[1px] border-[#E0E0E0] p-4 flex flex-col rounded-xl '>
        <span className='text-[16px] font-bold text-[#2E2E2E]'>{x.itemname}</span>
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
        ))
}
      </section>
      :
      <section className='w-full h-screen flex flex-col justify-center items-center p-0'>
        <span>
       No items yet
       </span>
       <br />
       <span>

        
Add your first grocery item using the ➕ button below!
       </span>
      </section>
}
 </>
  )
}

export default Items
