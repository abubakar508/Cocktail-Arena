import Image from "next/image";
import React from "react";

const Modal = ({ closeModal, cocktail }: any) => {
  return (
    <div className=" fixed inset-0 bg-black/60 h-screen z-50 flex items-center justify-center flex-col">
      <span
        className=" text-secondary font-lovers text-5xl bg-accent p-2 m-3 absolute rounded-md top-0 left-0 cursor-pointer"
        onClick={closeModal}
      >
        Close
      </span>
      <div className=" bg-gradient-to-b from-accent via-white to-white rounded-md pt-5 px-3 w-full lg:w-[700px] m-2 flex items-center justify-center flex-col overflow-scroll">
        <div className=" w-[300px] h-[300px] rounded-md">
          <Image
            src={cocktail.strDrinkThumb}
            width={300}
            height={300}
            alt={cocktail.strDrink}
            className=" w-full h-full rounded-md"
          />
        </div>
        <div className=" flex items-center flex-col justify-center w-full">
          <span className=" text-2xl lg:text-3xl font-bold font-montserrat text-secondary my-2">
            {cocktail.strDrink}
          </span>
          <span className=" text-secondary font-lovers Capitalize text-3xl font-black">
            {cocktail.strAlcoholic}
          </span>
          <span className=" text-secondary font-lovers Capitalize text-3xl font-black">
            {cocktail.strCategory}
          </span>
        </div>
        <div className=" text-secondary/50 font-montserrat text-lg text-center">
          <p>{cocktail.strInstructions}</p>
        </div>
        <div>
            {/* ingredients title */}
            <div className=" text-cente flex justify-center items-center">
            <span className=" font-lovers text-6xl text-accent font-bold">
            Ingredients
            </span>
            </div>
          {/* ingredients */}
          <div>
            <span className=" text-secondary text-lg text-center font-montserrat flex">
              {cocktail.strIngredient1}{" "}
              {cocktail.strIngredient2}{" "}
              {cocktail.strIngredient3}{" "}
              {cocktail.strIngredient4}{" "}
              {cocktail.strIngredient5}{" "}
              {cocktail.strIngredient6}{" "}
              {cocktail.strIngredient7}{" "}
              {cocktail.strIngredient8}{" "}
              {cocktail.strIngredient9}{" "}
              {cocktail.strIngredient10}{" "}
              {cocktail.strIngredient11}{" "}
              {cocktail.strIngredient12}{" "}
              {cocktail.strIngredient13}{" "}
              {cocktail.strIngredient14}{" "}
              {cocktail.strIngredient15}
            </span>
          </div>
          {/* glass */}
          <div className=" text-center">
          <span className=" text-slate-700 font-bold text-center">
            Glass Type: {" "}{cocktail.strGlass}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
