import React from 'react'
import { Link } from 'react-router-dom';

const ChildNav = ({option,setOption}) => {
  return (
    <div className='m-auto' style={{width:"fit-content"}}>
      <ul className='flex gap-2'>
        <li onClick={(e)=>setOption(e.target.textContent)} value="Study" className={`mx-2 px-2 hover:text-[#06286E] hover:font-bold hover:text-[20px] font-inter text-[#696671] font-inter text-[20px] font-medium ${option=="Study"?"border-b-2 border-[#06286E]":""}`}>
            <button>Study</button>
        </li>
        <li onClick={(e)=>setOption(e.target.textContent)} value="Quiz" className={`mx-2 px-2 hover:text-[#06286E] hover:font-bold hover:text-[20px] font-inter text-[#696671] font-inter text-[20px] font-medium ${option=="Quiz"?"border-b-2 border-[#06286E]":""}`}>
            <button>Quiz</button>
        </li>
        <li onClick={(e)=>setOption(e.target.textContent)} value="Test" className={`mx-2 px-2 hover:text-[#06286E] hover:font-bold hover:text-[20px] font-inter text-[#696671] font-inter text-[20px] font-medium ${option=="Test"?"border-b-2 border-[#06286E]":""}`}>
            <button>Test</button>
        </li>
        <li onClick={(e)=>setOption(e.target.textContent)} value="Games" className={`mx-2 px-2 hover:text-[#06286E] hover:font-bold hover:text-[20px] font-inter text-[#696671] font-inter text-[20px] font-medium ${option=="Games"?"border-b-2 border-[#06286E]":""}`}>
            <button>Games</button>
        </li>
        <li onClick={(e)=>setOption(e.target.textContent)} value="Others" className={`mx-2 px-2 hover:text-[#06286E] hover:font-bold hover:text-[20px] font-inter text-[#696671] font-inter text-[20px] font-medium ${option=="Others"?"border-b-2 border-[#06286E]":""}`}>
            <button>Others</button>
        </li>
      </ul>
    </div>
  )
}

export default ChildNav
