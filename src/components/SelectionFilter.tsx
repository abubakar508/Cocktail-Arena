"use client";

// react hooks
import React, { useEffect, useState } from "react";

// constants
import { Alphabet } from "@/constants";

// next image
import Image from "next/image";

// assets
import { Search, Spinner } from "../../public";

// utils
import { useCocktailByLetter } from "@/utils";

// components
import { CocktailCard } from ".";

const SelectionFilter = () => {
  const [dataselect, setDataSelect] = useState(false);

  // This State stores the selected letter
  const [selectedLetter, setSelectedLetter] = useState("");

  // state to pass the cocktails data through
  const [cocktails, setCocktails] = useState([]);

  // State to store fetched cocktails
  const [searching, setSearching] = useState(false);

  // Function to fetch data based on the selected letter
  const fetchData = async () => {
    try {
      if (selectedLetter) {
        setSearching(searching);
        const data = await useCocktailByLetter({ query: selectedLetter });

        // Code to handle the fetched data
        setCocktails(data.drinks);
      }
    } catch (error) {
      // handle errors if they appear
      console.error("Error fetching data:", error);
    }
  };

  // fetch the respective data when selected letter changes
  useEffect(() => {
    fetchData();
  }, [selectedLetter]);
  // the dependeciy array triggers an effect whenever selectedLetter changes

  // This function handles the selected change
  const handleSelectChange = (e: any) => {
    setSelectedLetter(e.target.value);
    e.preventDefault();
    // prevents reloading of the borwser/webpage after clicking
  };
  return (
    <div className=" flex items-center justify-center flex-col gap-5 pb-[800px]">
      <div className=" text-white flex flex-col gap-3 items-center lg:flex-row lg:py-6 rounded-md bg-secondary/40 w-full justify-center">
        {/* selected tag */}
        <div className=" flex flex-col lg:flex-row gap-3 items-center lg:justify-evenly w-full">
          <select
            name=""
            id=""
            value={selectedLetter}
            onChange={handleSelectChange}
            className=" py-4 px-10 flex items-center rounded-md shadow-lg bg-secondary text-accent uppercase font-black font-lovers text-2xl"
          >
            {/* mapping the letters from the constants */}
            {Alphabet.map((letter: any, index: number) => (
              <option
                value={letter}
                key={index}
                onClick={() => setDataSelect(letter)}
                className=" p-3"
              >
                {letter}
              </option>
            ))}
          </select>
          <div>
            {/* ternary operatot for the letter selected actions */}
            {dataselect ? (
              <span className=" font-medium font-lovers text-6xl">
                Displaying{" "}
                <span className=" font-comforta text-primary uppercase text-xl rounded-full p-2 bg-accent ">
                  {dataselect}
                </span>{" "}
                Cocktails
              </span>
            ) : (
              <span className=" font-lovers text-5xl text-accent">
                Select by Letter
              </span>
            )}
          </div>
        </div>
      </div>
      {/* ternary operator for the searching period */}
      <div className=" flex flex-col items-center justify-center ">
        {searching ? (
          <div className=" w-full flex items-center justify-center py-5 mt-10">
            <Image src={Spinner} width={100} height={100} alt="spinner" />
          </div>
        ) : (
          <div className=" grid items-center gap-y-10 lg:gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center">
            {/* passing the data as props to the cocktail components */}
            {cocktails.map((cocktail: any, index: number) => (
              <CocktailCard cocktail={cocktail} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectionFilter;
