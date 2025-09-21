import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const HomePage = () => {
  return (
    <div className='h-[100vh] w-full bg-gray-100'>
      {/*nav section*/}
      <div className='hidden h-[10vh] w-full bg-blue-600 md:flex md:justify-center md:items-center '>
        <h1>Logo</h1>
        <ul className='flex gap-10 text-lg font-medium'>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
        </ul>
      </div>
      {/* first main section for small devices*/}

      <div className='h-[100vh] md:hidden w-full bg-green-600'>
        <div className='h-[90px] w-full bg-pink-500 flex justify-around items-center'>
          <span className='font-bold'>
            <h1>Nile Eats</h1>
            <p>Order your favorite food!</p>
          </span>
          <span>
            <div className='h-[50px] w-[50px] rounded-[100%] bg-black'></div>
          </span>
        </div>
        <div className='h-[60px] w-full bg-yellow-500 flex flex-col justify-center items-center gap-10'>
          <input type='text' placeholder='Search for food' className='h-[40px] w-[90%] rounded-md border-1 p-2' />
        </div>
        <div className='overflow-hidden h-[60px] w-full bg-blue-600'>
          {/* categories will be here */}
        </div>
        <div className='h-[calc(100vh-210px)] w-full bg-purple-500 overflow-y-scroll'>
          {/* food items will be here */}
        </div>
        <div className='h-[80px] w-full bg-black absolute bottom-0 flex justify-around items-center text-white'>
          <FontAwesomeIcon icon={faHouse} size='2x' />
          <FontAwesomeIcon icon={faHeart} size='2x' />
          <FontAwesomeIcon icon={faMessage} size='2x' />
          <FontAwesomeIcon icon={faShoppingCart} size='2x' />
        </div>
      </div>

      {/* second main section for medium and large devices*/}
    </div>
  )
}

export default HomePage
