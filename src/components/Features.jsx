import React from 'react'

const Features = () => {
  return (
    <div className='max-w-[1600px] mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='w-full h-200px rounded-2xl '>
            <div className='relative rounded-2xl'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 text-yellow-300 rounded-2xl shadow-2xl '>
                    <h4 className='text-3xl font-bold px-2 mt-4'>Happy Burger</h4>
                    <p className='text-[14px] px-2'>through 15/1</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/2874989/pexels-photo-2874989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-full w-full rounded-2xl object-cover' />
            </div>
        </div>
        <div className='w-full h-200px rounded-2xl '>
            <div className='relative rounded-2xl'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 text-yellow-300 rounded-2xl shadow-2xl '>
                    <h4 className='text-3xl font-bold px-2 mt-4'>Bufflo Burger</h4>
                    <p className='text-[14px] px-2'>through 15/1</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-full w-full rounded-2xl object-cover' />
            </div>
        </div>
        <div className='w-full h-200px rounded-2xl '>
            <div className='relative rounded-2xl'>
                {/* overlay */}
                <div className='absolute w-full h-full bg-black/50 text-yellow-300 rounded-2xl shadow-2xl '>
                    <h4 className='text-3xl font-bold px-2 mt-4'>Super Pizza</h4>
                    <p className='text-[14px] px-2'>throught 15/1</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-full w-full rounded-2xl object-cover' />
            </div>
        </div>
      
    </div>
  )
}

export default Features