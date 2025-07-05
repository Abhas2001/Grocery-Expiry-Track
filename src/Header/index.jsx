import React from 'react'
import Search from '../Search'

const Header = () => {
  return (
   <>
    <section className='w-full flex justify-center items-center '>
        <span className='font-bold text-[28px] text-[#2E2E2E]'>Fresh Keep</span>
      </section>
      <Search/>
   </>
  )
}

export default Header
