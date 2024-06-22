import { useState,usecallback } from 'react'



function App() {
  
  const [length, setlength] = usestate(8)
  const [characterAllowed, setcharacterAllowed] = usestate(false)
  const [numberAllowed, setnumberAllowed] = usestate(false)
  const [password, setPassword] = usestate("")



  const passwordGenerator = usecallback(() =>{
    let pass= ""
    let str= "abcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(characterAllowed) str+= "!@#$%^&*()_+"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pas= str.charAt(char)
    } 

      setPassword(pass)
  }, [lenth, characterAllowed, numberAllowed, setPassword])
  return (
    <>
         <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
       
       <h1 className='text-white text-center my-3 '> Random Password generator</h1>
       
       <div  className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
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
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setlength(e.target.value)}}
        />
        <label htmlFor="">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() =>{
            setnumberAllowed((prev) => !prev);  
          }}
          label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={characterAllowed}
          id="characterInput"
          onChange={() =>{
            se((prev) => !prev);  
          }}
          label htmlFor="characterInput">Characters</label>
        </div>

      </div>
       </div>
       
       
    </>
  )
}

export default App
