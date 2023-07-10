import React from 'react'

function Button(props:any) {
  return (
    <button onClick={()=>props.onClick()} className='p-3 text-black rounded-lg bg-zinc-400 w-fit h-fit'>
        {props.children}
    </button>
  )
}

export default Button   