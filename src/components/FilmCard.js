import React from "react";

const FilmCard = ({ titre, description, poste, note}) => {
  return (
    <div class="relative flex w-[80%] ml-[70px] p-2 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={poste} class="h-[100%] w-[100%]" />
      </div>
      <div class="p-6">
        <div class="mb-2 flex items-center justify-between">
          
            <h1 class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Title:{titre}
            </h1>
          <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Note:{note}
          </p>
        </div>
        <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FilmCard;
