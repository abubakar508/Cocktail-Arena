"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Modal } from ".";

const CocktailCard = ({ cocktail, key }: any) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div
        key={key}
        className=" flex items-center flex-col rounded-md shadow-md p-3 bg-secondary text-white justify-center w-[300px] h-[400px] group"
      >
        <div className=" w-[250px] h-[250px] relative">
          <Image
            src={cocktail.strDrinkThumb}
            width={100}
            height={100}
            alt={cocktail.strDrink}
            className=" w-full h-full"
          />
          <div className=" w-full h-full absolute top-0 z-20 lg:bg-secondary/80 lg:hidden lg:group-hover:flex items-center justify-center flex">
            <span
              onClick={() => setModal(true)}
              className="  bg-accent/50 lg:bg-accent px-8 py-4 text-robust font-lovers text-3xl rounded-md cursor-pointer"
            >
              View More
            </span>
          </div>
        </div>
        <div className=" flex flex-col items-center px-1 gap-y-1">
          <span className=" font-montserrat uppercase text-xl font-black">
            {cocktail.strDrink.length > 18
              ? cocktail.strDrink.slice(0, 18) + "..."
              : cocktail.strDrink}
          </span>
          <span className=" font-lovers Capitalize text-3xl font-black">
            {cocktail.strAlcoholic}
          </span>
        </div>
        <div>
          <span className=" text-neutral-300 font-bold">
            {cocktail.strGlass}
          </span>
        </div>
      </div>
      {modal && <Modal cocktail={cocktail} closeModal={() => setModal(false)} />}
    </>
  );
};

export default CocktailCard;
