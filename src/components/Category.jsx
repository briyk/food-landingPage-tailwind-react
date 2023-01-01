import React from 'react'
import {categories} from '../assets/data'
const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
   {/* section title */}
   <h1 className="text-3xl font-bold  border-l-4 border-yellow-400">
        <span className="pl-4">Top Rated </span>
        <span className="text-yellow-400 ">Menus</span>
      </h1>
    {/* Categories */}
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
      {categories.map((item, index) => (
        <div
          key={item.name}
          className='bg-gray-100 rounded-lg p-4 flex justify-between items-center border-r-8 border-yellow-400'
        >
          <h2 className='font-bold sm:text-xl'>{item.name}</h2>
          <img src={item.image} alt={item.name} className='w-20' />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Category