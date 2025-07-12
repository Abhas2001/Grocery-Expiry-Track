import React from 'react'

import edit from '../assets/edit.png';
import deleteicon from '../assets/delete.png'
import { useContext } from 'react';
import { userContext } from '../Home';

const Items = () => {
    const{data,setdeletesuccess,loader,setshowmodal,editdata,seteditdata} = useContext(userContext);

    const result = data?.filter((x)=>x.itemname?.length>0)
    console.log(data,"datahaibeta");

    const handleedit = async(val) =>{
      const response = await fetch(`https://gross-backend.onrender.com/edit?id=${val}`)
      const data = await response.json();
      seteditdata(data);
      setshowmodal(true)
    }

    console.log(editdata.itemName,"editdata");
    const handledelete = async(val) =>{

      const response = await fetch(`https://gross-backend.onrender.com/delete?id=${val}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
      })
   const message = await response.json()
     if(message.message=="Item deleted successfully!"){
      setdeletesuccess(true);
    }
  }
  return (
 <>
 {loader?
 <section className='w-full h-screen flex justify-center items-center relative bottom-60'>
 <div >
  <img className='w-12 h-12' src={'https://static.wixstatic.com/media/68315b_30dbad1140034a3da3c59278654e1655~mv2.gif'} />
 </div>
 </section>
 :
 <div>
 {data.length>0?
   <section className='w-full flex flex-col justify-center items-center p-6 gap-2 overflow-y-auto overflow-x-hidden'>
    { data.map((x)=>(

  
      <section className='w-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-[1px] border-[#E0E0E0] p-4 flex flex-col rounded-xl '>
        <span className='text-[16px] font-bold text-[#2E2E2E]'>{x.itemName}</span>
        <span className='text-[14px] font-normal text-[#9E9E9E]'>Qty: 2</span>
        <span className='text-[14px] font-normal text-[#9E9E9E]'>Expires on: 10 Jul 2025</span>
        <div className='flex w-full items-center gap-4'>
        <span className="text-xs font-semibold text-[#28C76F] bg-[#E3F9EC] rounded-md">
  5 Days Left
</span>

            <span onClick={()=>handleedit(x._id)}><img className='w-6 h-6' src={edit} alt="" /></span>
            <span onClick={()=>handledelete(x._id)}><img className='w-6 h-6' src={deleteicon} alt="" /></span>
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
</div>
}
 </>
  )
}

export default Items
