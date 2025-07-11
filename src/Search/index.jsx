import React, { useContext } from 'react'
import searchicon from '../assets/searchicon.png';
import filtericon from '../assets/filtericon.png'
import { userContext } from '../Home';

const Search = () => {

  const {setsearchdata} = useContext(userContext);
  return (
   <>

<section className='p-6 w-full flex gap-2 justify-center items-center'>
        <div className='flex relative w-full'>
            <input onChange={(e)=>setsearchdata(e.target.value)} className='w-full shadow-[0_0_0_2px_rgba(40,199,111,0.1)] p-2 border-[1px] rounded-4xl border-[#E0E0E0] placeholder:[#9E9E9E] text-[#2E2E2E] focus:[#28C76F]' placeholder='Search groceries…' type="text" />
            <img className='w-4 h-4 absolute right-2 top-3' src={searchicon} alt="" />
            </div>

            <div>
                <img className='w-4 h-4' src={filtericon} alt="" />
            </div>
      </section>
   </>
  )
}

export default Search
