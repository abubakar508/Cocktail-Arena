"use client";
import { useCocktailByLetter } from '@/utils';
import React, { useEffect } from 'react'
import { SelectionFilter } from '.';

const SearchWrapper = () => {
        const query = 'your_letter'; // Replace 'your_letter' with the letter you want to search for
      
        // Fetch data using the function
        const fetchData = async () => {
          try {
            const data = await useCocktailByLetter({ query });
            // Handle the fetched data here
            return data;
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors if necessary
          }
        };
      
        useEffect(() => {
          fetchData();
        }, []); // Ensure this runs only once on component mount or update the dependency array appropriately
      
  return (
    <div>
    </div>
  )
}

export default SearchWrapper