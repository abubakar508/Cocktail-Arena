"use client";
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita search by name
// searchng the cocktail from the database by name using fetch

// types
import { FetchPropTypes } from "@/Types";


// useState Snippet

export const useCocktailByName = async ({query} : FetchPropTypes) => {
        const baseUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

        // fetch functionalites
        const response = await fetch(baseUrl)
        const results = response.json()
        return results;


}

//  list by first letter www.thecocktaildb.com/api/json/v1/1/search.php?f=a

export const useCocktailByLetter = async ({ query } : FetchPropTypes) => {
    const baseUrl = `https://thecocktaildb.com/api/json/v1/1/search.php?f=${query}`;
    
    // fetch functionalities
    const response = await fetch(baseUrl);
    const results = response.json()
    return results
}




































//  ingredient by name www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka  //one

//  list by first letter www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// randow cocktail www.thecocktaildb.com/api/json/v1/1/random.php

// searc by ingredient www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka


//  filter by type: alcoholic & non alcoholic www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic 



// filter by category 
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail



// list by categories glasses ingredients and other filters
// www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/list.php?a=list



