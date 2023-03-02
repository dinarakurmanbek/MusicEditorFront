import React from 'react'

export const Button = ({type, text}) => {
    return (
        <button className={`${type === 'outline' ?  'border border-white' : 'text-black bg-white'} py-[7px] px-[34px] rounded-md`}>{text}</button>
    )
}