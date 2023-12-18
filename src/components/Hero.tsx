import React from "react";
// next image
import Image from "next/image";

//assets
import { CustomButton } from ".";
import { Blue } from "../../public";

const Hero = () => {
  return (
    <div className=" h-screen flex items-center justify-center lg:justify-between px-2">
      <div className=" flex flex-col gap-3 p-4 MD:W-[500px] lg:w-[700px]">
        <div className=" flex items-center gap-2">
            <div className=" border-2 border-accent p-1 w-fit">
                <div className=" w-10 h-10 bg-accent aspect-square" />
            </div>
            <div>
                <span className=" font-lovers text-5xl underline text-accent">Cocktail Arena</span>
            </div>
            <div className=" border-2 border-accent p-1 w-fit">
                <div className=" w-10 h-10 bg-accent aspect-square" />
            </div>
        </div>
        <h1 className=" font-dancing font-black text-3xl lg:text-5xl text-accent uppercase">
          Get amazing cocktail recipes blended with natures taste - Search your
          favourite cocktail and prepare it at your own comfort.
        </h1>
        <span className=" font-black font-lovers text-6xl bg-gradient-to-r from-accent via-fuchsia-500 to-red-500 bg-clip-text text-transparent w-fit">
            Cocktail arena unveils
        </span>
        <CustomButton title='Explore More' />
        <div className=" flex items-center">
            <div className=" rounded-full p-1 border-2 border-accent">
            <div className=" w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-accent" />
            </div>
            <div className=" h-2 w-[300px] bg-gradient-to-r from-accent" />
        </div>
      </div>
      <div className=" hidden xl:block w-[600px] h-screen">
        <Image
          src={Blue}
          width={200}
          height={200}
          alt="hero_image"
          className=" object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
