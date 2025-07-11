import React, { useState } from 'react'

const Splittxt = () => {

    const[Refresh,setrefresh] = useState(false)
    const[hide,sethide] = useState(false)

    const handleRefresh = () => {
        setrefresh(true);    
        setTimeout(() => {
            sethide(false);
            setrefresh(false);

        }, 300);  
        
        setTimeout(() => {
            sethide(true);
        }, 100);
    }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#393939]'>
       <div className='flex w-full justify-center items-center'>
        <span className={`text-[50px] font-bold text-[#fff] transition duration-150 ease-in-out ${Refresh ? 'translate-y-5' : ''} ${hide ? 'opacity-0' : 'opacity-100'}`}>
            Hello, You!
        </span>
        </div>
        
        <div className='flex w-full '>
        <button onClick={handleRefresh} className='text-white cursor-pointer'>Refresh</button>
        </div>
      
    </div>
  )
}

export default Splittxt
