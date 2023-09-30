import React from 'react'
import Movie from './MovieList'
import { Link, useParams } from 'react-router-dom'
import { FaHome  } from "react-icons/fa";
function DetailsFilm() {
const {id}=useParams()
const descr=Movie.find((m)=>m.id===id)
return (
    <>
    <div className='flex flex-col items-center '>
    <Link to="/">
  <a href="" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
      <svg class="w-5 h-5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative flex items-center"> <FaHome class="mr-2" /> Home </span>
  </a>
</Link>
    </div>
    <div className='flex flex-col items-center  '>
      <h1 className='font-serif text-xl text-center font-semibold'>Trailer</h1>
        <iframe className='rounded lg' width="550" height="300" src={descr.trailler} title={descr.titre} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h1 className='font-serif text-xl text-center font-semibold'>Description:</h1>
        <h2 className='font-serif text-xl text-center font-semibold tracking-wide w-[20%]'>{descr.description}</h2>
    </div>
    </>
  )
}


export default DetailsFilm