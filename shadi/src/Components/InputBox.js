import React from 'react'

export const InputBox = (props) => {
  return (
    <input type={props.type} className='InputBox' name={props.name} onChange={props.onChange}
    ></input>
  )
}
