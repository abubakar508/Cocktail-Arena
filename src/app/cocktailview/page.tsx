"use client";
import { useParams, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const CocktailView = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  console.log(searchParams.get('cocktail'))
  return (
    <div className=' text-white'>
      <span className=' text-white text-4xl uppercase mt-32'>
      </span>
    </div>
  )
}

export default CocktailView