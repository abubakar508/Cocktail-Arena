"use client";
import { CocktailCard } from "@/components";
import { useCocktailByName } from "@/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spinner } from "../../../public";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(false)

  const fetchCocktailByName = async (query: string) => {
    try {
      const data = await useCocktailByName({ query });
      if (data.drinks) {
        setCocktails(data.drinks);
      } else {
        setCocktails([]);
        setError(true)
      }
      setSearching(false);
    } catch (error) {
      console.error('Error fetching Cocktails:', error);
      setSearching(false);
    }
  };

  useEffect(() => {
    if (searchTerm !== '') {
      setSearching(true);
      fetchCocktailByName(searchTerm);
    } else {
      setCocktails([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e : any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='flex items-center justify-center flex-col gap-5'>
      
      <div className='mt-40'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div>
        <span className=' font-bold text-white text-4xl font-lovers mt-24'>
          Type in your favourite Cocktail
        </span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {searching ? (
          <div className='w-full flex items-center justify-center py-5 mt-10'>
            <Image src={Spinner} width={100} height={100} alt='spinner' />
          </div>
        ) : (
          <div className='grid items-center gap-y-10 lg:gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center'>
            {cocktails.map((cocktail, index) => (
              <CocktailCard key={index} cocktail={cocktail} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
