import React from 'react'
import Search from '../Search'

const Header = () => {
  return (
   <>
  <style>
    {`
      .header-title {
        color: gold;
        transition: text-decoration 0.2s;
      }
      .header-title:hover {
        text-decoration: underline;
      }
    `}
  </style>
    <section className='w-full flex justify-center items-center '>
        <header className='font-bold text-[28px] text-[#2E2E2E]'>Fresh Keep</header>
      </section>
      <Search/>
   </>
  )
}

export default Header
