"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CustomButton, NavMobile } from './'
import { Logo, menu } from '../../public'
import { NavItems } from '@/constants';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  return (
    <nav className=' text-neutral-300 font-comforta fixed w-full flex items-center justify-between px-0 lg:px-24 lg:py-2 z-50 bg-primary'>
      <div className=' font-lovers text-5xl w-[200px] h-[70px] p-1'>
        <Image
         src={Logo}
         width={200} 
         height={50} 
         quality={100} 
         alt='nav_logo'
         className=' w-full h-full object-contain'
         />
      </div>
      {/* desktop navigation */}
      <div className=' gap-3 hidden lg:flex'>
        {NavItems.map((link: any, index: number) => (
          <Link href={link.path} key={index} className=' bg-accent px-6 py-2 text-robust font-lovers text-4xl rounded-l-full rounded-tr-full'>
            {link.name}
          </Link>
        ))}
      </div>
      {/* sign in button */}
      <div className=' hidden lg:block'>
        <CustomButton title='Contact' />
      </div>
      {/* mobile navigation: menu bar */}
      <div 
      className='block lg:hidden cursor-pointer'
      onClick={() => setNav(!nav)}
      >
        <Image
        src={menu}
        width={50}
        height={50}
        alt='menu-bar'
        className=''
        draggable={false}
        priority
        />
      </div>
      { nav && <NavMobile closeModal={() => setNav(!nav)} />}
    </nav>
  )
}

export default Navbar