import React, { useState } from 'react'
import '../index.css'
const Dropdown = ({selected,setSelected}) => {
  const[isActive,setIsActive] = useState(false);
  const options = ["Java","Python","C","Java Script"]
  return (
     <>
     <h1>Your choice is {selected}</h1>
    <div className='dropdown'>
    <div className='dropdown-btn' 
    onClick={e => setIsActive(!isActive)}>
   
   {selected ? selected : 'SELECT ⏩'}
    </div>
    {isActive && (
     <div className='dropdown-content'>
     {options.map((option)=>(
      <div onClick={(e)=> {
                setSelected(option)
                setIsActive(false)
                }
                }className='dropdown-item'>
      {option}
    </div>
    ))}
    </div>
    )} 
    </div>
    </>
  )
}

export default Dropdown 
