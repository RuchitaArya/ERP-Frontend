import React from 'react'

const Home = () => {
  return (
    <>
     <div className="searchBox border-solid border-2 border-lite-gray-500 rounded-2xl p-2 mt-5 h-[6%] w-[80%]"><i class="fa-solid fa-magnifying-glass fa-lg"></i>
    <input type="text" placeholder="search"className="search border-none  
 outline-none  text-center "/></div><br />
    <div className='flex gap-2 shadow-xl text-center h-[80%] w-96 mt-5 '>Home</div></>
    
  )
}

export default Home