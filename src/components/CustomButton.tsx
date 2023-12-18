import React from 'react'

import { CustomButtonPropTypes } from '@/Types';


const CustomButton = ({title, containerStyles, handleClick} : CustomButtonPropTypes) => {
  return (
    <button className={`${containerStyles} bg-accent w-fit px-6 rounded-full hover:bg-accent-hover font-dancing font-black text-xl text-robust py-3`}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton;