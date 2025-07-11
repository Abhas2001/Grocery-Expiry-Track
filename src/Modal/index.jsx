import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../Home';

const Modal = () => {

    const {showmodal,setshowmodal,data,setdata} = useContext(userContext)
    const[count,setcount] = useState(0);
    const[itemname,setitemname] = useState('');
    const[expdate,setexpdate] = useState('');
   
    
    const handlehidemodals = async() =>{
        // setdata((prev)=>([...prev, {itemname:itemname,quantity:count,expdate:expdate}]))
         const response = await fetch('https://gross-backend.onrender.com/save',{
             method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },    

              body:JSON.stringify({
                  itemName:itemname,
                  Quantity:count,
                  ExpiryDate:expdate              
         })
        })
        const dataS = await response.json();
        console.log(dataS);

        setshowmodal(false);
    }

    
  const handleshowmodal = () => {
    setitemname('')
    setcount(0)
    setexpdate('')
    setshowmodal(true);
  };

  const handleitemname = (val) =>{
    setitemname(val);
   
    
    console.log(val);
  }

  const handleexpdate = (val) =>{
    setexpdate(val)


  }

  const handledisabled  = () =>{
    if(itemname.length>0&&expdate.length>0&&count!==0){
        return false
    }
    else{
        return true
    }
  }

const getdata = async() =>{
  await fetch('https://gross-backend.onrender.com/getdata')
  .then((res)=>res.json())      
  .then((data)=>{
    setdata(data);
    console.log(data);
  })
}

useEffect(()=>{
  if(!showmodal){
   
  getdata();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[showmodal])

  return (
    <>
         <section className={`fixed transition-all duration-500 ease-in-out ${showmodal?'bottom-0 z-50':'bottom-[-500px]'} shadow-2xl w-full bg-white rounded-2xl flex flex-col gap-6 p-4`}>

<div>
    <span className='text-lg font-semibold text-[#2E2E2E]'>Add Grocery Item   </span>
</div>
<div className='flex gap-1'>
    <span className='text-sm font-normal text-[#2E2E2E]'>Item Name:</span>
    <input value={itemname} onInput={(e)=>handleitemname(e.target.value)} className='border-[1px] border-[#E0E0E0] rounded-md' type="text" />
</div>





<div className='flex gap-3 items-center'>
    <span className='text-sm font-normal text-[#2E2E2E]'>Quantity:</span>
    <div className='flex gap-1'>
        <button onClick={()=>setcount(count-1)}>-</button>
       <div className='border-[1px] border-[#E0E0E0] px-2 text-[#2E2E2E]'>{count}</div>
    <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  
</div>

<div className='flex gap-1 items-center'>
    <span className='text-sm font-normal text-[#2E2E2E]'>Expiry Date:</span>
    <input value={expdate} onInput={(e)=>handleexpdate(e.target.value)} className='border-[1px] border-[#E0E0E0] rounded-md' type="text" />
   
</div>

<div className='flex gap-4'>
<button onClick={()=>handlehidemodals()} className='text-[#6E6E6E] text-sm '>Cancel</button>

<button disabled={handledisabled()}  onClick={()=>handlehidemodals()} className='bg-[#28C76F] text-sm py-1 px-2 rounded-md disabled:opacity-40'><span className='text-sm text-white'>Save</span></button>
</div>


<div className='flex gap-4'>
<button onClick={()=>handlehidemodals()} className='text-[#6E6E6E] text-sm '></button>

<button onClick={()=>handlehidemodals()} className='text-[#28C76F] text-sm'></button>
</div>
</section>

<section className="fixed bottom-0 w-full flex justify-center items-center">
        <div
          onClick={() => handleshowmodal()}
          className="text-white bg-[#28C76F] rounded-full w-12 h-12 flex justify-center items-center font-medium"
        >
          <span className="text-xl">+</span>
        </div>
      </section>
    </>
  )
}

export default Modal
