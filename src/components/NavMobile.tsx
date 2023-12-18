import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { NavItems } from '@/constants'
import Image from 'next/image'

const NavMobile = ({ closeModal} : any) => {
    const router = usePathname()
  return (
    <div className=' fixed inset-0 h-screen w-full bg-accent-hover lg:hidden flex items-center flex-col justify-center'>
        <span className=' text-accent font-lovers text-5xl bg-secondary p-2 m-3 absolute rounded-md top-0 left-0 cursor-pointer'
        onClick={closeModal}
        >
            Close
        </span>
        <div className=' absolute bottom-10 bg-primary px-7 flex items-center flex-col py-2 rounded-md'>
       
      <div className=' flex flex-col items-center justify-center'>
        <span className=' text-accent font-dancing text-4xl'>Made With Abisma</span>
        <span className=' text-neutral-300 font-lovers text-4xl'>
            All Rights Reserved
        </span>
      </div>
      </div>
        <div className=' flex flex-col items-center gap-3 text-7xl font-lovers font-medium'>
            {NavItems.map((link: any, index: number) => (
                <Link 
                href={link.path}
                key={index}
                className={` ${link.path === router && 'bg-secondary text-white'} capitalize hover:bg-secondary py-1 px-10 text-secondary hover:text-white flex items-center justify-center`}
                onClick={closeModal}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default NavMobile