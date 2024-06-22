import { useState,usecallback } from 'react'



function App() {
  

  return (
    <>
         <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
       
       <h1 className='text-white text-center my-3 '> Random Password generator</h1>
       
       <div  className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        // value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Your Password'
        readonly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

       </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={8}
        max={120}
        value={length}
        className='cursor-pointer'
        />
        <label htmlFor="">Length: {length}</label>
        </div>
      </div>
       </div>
       
       
    </>
  )
}

export default App
