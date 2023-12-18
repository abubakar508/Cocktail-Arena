"use client";
import React, { useEffect, useState } from 'react';
import { Alphabet } from '@/constants';
import Image from 'next/image';
import { Search, Spinner } from '../../public';
import { useCocktailByLetter } from '@/utils';
import { CocktailCard } from '.';

const SelectionFilter = () => {
    const [dataselect, setDataSelect] = useState(false)
    const [selectedLetter, setSelectedLetter] = useState(''); // State to store the selected letter
    const [cocktails, setCocktails] = useState([]);
    const [searching, setSearching] = useState(false) // State to store fetched cocktails
  
    // Function to fetch data based on the selected letter
    const fetchData = async () => {
      try {
        if (selectedLetter) {
          setSearching(searching)
          const data = await useCocktailByLetter({ query: selectedLetter });
          // Handle the fetched data here
          setCocktails(data.drinks); // Assuming 'drinks' is an array in the fetched data
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors if necessary
      }
    };
  
    // Fetch data when the selected letter changes
    useEffect(() => {
      fetchData();
    }, [selectedLetter]); // Trigger the effect whenever selectedLetter changes
  
    // Function to handle select change
    const handleSelectChange = (e : any) => {
      setSelectedLetter(e.target.value);
      e.preventDefault();
    };
  return (
    <div className=' flex items-center justify-center flex-col gap-5'>
    <div className=' text-white flex flex-col gap-3 items-center lg:flex-row lg:py-6 rounded-md bg-secondary/40 w-full justify-center'>
      <div className=' flex flex-col lg:flex-row gap-3 items-center lg:justify-evenly w-full'>
        <select
         name="" 
         id="" 
         value={selectedLetter} onChange={handleSelectChange}
         className=' py-4 px-10 flex items-center rounded-md shadow-lg bg-secondary text-accent uppercase font-black font-lovers text-2xl'
         >
            {Alphabet.map((letter: any, index: number) => (
                <option value={letter} key={index} onClick={() => setDataSelect(letter)} className=' p-3' >
                    {letter}
                </option>
            ))}
        </select>
        <div>
            {dataselect ? (
            <span className=' font-medium font-lovers text-6xl'>
               Letter <span className=' font-comforta text-primary uppercase text-xl rounded-full p-2 bg-accent '>{dataselect}</span> {" "}
                Chosen
            </span>
            ) : (
                <span className=' font-lovers text-5xl text-accent'>
                    Select by Letter
                </span>
            )}
        </div>
        </div>
    </div>
    <div className=' flex flex-col items-center justify-center '>
      {searching ? (
        <div className=' w-full flex items-center justify-center py-5 mt-10'>
          <Image src={Spinner} width={100} height={100} alt='spinner' />
        </div>
      ) : (
        <div className=' grid items-center gap-y-10 lg:gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center'>
           {cocktails.map((cocktail: any, index: number) => (
          <CocktailCard  cocktail={cocktail} key={index} />
        ))}
        </div>
      )}
    </div>
    </div>
  )
            }


export default SelectionFilter;