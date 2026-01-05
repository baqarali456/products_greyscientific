import React, { useId } from 'react'

function Input(
    {
        type="text",
        label,
        className="",
        ...props

    },ref
) {
    const id = useId()
  return (
    <div className=' mb-2'>
        <label className=' d-block mb-1' htmlFor={id}>{label}</label>
        <input 
        className={` w-100 p-2 rounded shadow ${className} `}
        id={id}
        type={type}
        ref={ref}
        {...props}
        required={label !== "Description"}
        />

    </div>
  )
}

export default Input