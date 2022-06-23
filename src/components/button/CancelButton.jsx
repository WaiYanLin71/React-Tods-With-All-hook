import React from 'react'

const CancelButton = ({cancel,children}) => {
  return (
     <button onClick={()=>{
        cancel(false)
     }} className='btn btn-info text-white'>{children}</button>
  )
}

export default CancelButton
