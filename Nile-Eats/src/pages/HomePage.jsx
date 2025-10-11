import React from 'react'
import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'  
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import FoodCard from '../components/FoodCard'
import Cat from '../components/Cat'
import logo from '../assets/logo.png'
import rice from '../assets/rice.png'

const HomePage = () => {
  const onOffRef = useRef(null);
  const toggleRef = useRef(null);
  const spinRef = useRef(null);

  const rotate = () => {
    spinRef.current.classList.toggle('animate-spin');
   
  }

  

  const removeRotate = () => {
    spinRef.current.classList.remove('animate-spin');
  }
  

  const handleToggle = () => {
    toggleRef.current.style.display = 'block';
  }

  const hiddenMenu = () => {
    toggleRef.current.style.display = 'none';
  }


  const handleHideSearch = () => {
    onOffRef.current.style.display = 'block';
  }
  return (
    <div className='h-[100vh] w-full  relative overflow-hidden bg-red-600'>
      <div className=' bg-gray-800 hidden md:flex rounded-[100%] w-[650px] h-[650px] absolute top-[-10%] right-[-15%]'></div>
      {/*nav section*/}
      <div className='hidden h-[10vh] w-full md:flex md:justify-center md:items-center '>
        <img src={logo} className='absolute left-0 h-[70px] w-[70px] top-1 bg-white rounded-full' alt="logo" />
        <ul className='flex gap-10 text-lg font-medium'>
          <li className='hover:border-b-1 border-white cursor-pointer  text-white'>Home</li>
          <li className='hover:border-b-1 border-white cursor-pointer  text-white'>Menu</li>
          <li className='hover:border-b-1 border-white cursor-pointer  text-white'>About</li>
        </ul>
        <div className=' h-[10vh] w-[300px] absolute right-0 flex justify-around items-center'>
          <input ref={onOffRef} type='text' placeholder='Search for food' className='h-[30px] w-[180px] border-white border-1 p-2 absolute left-13' />
          <FontAwesomeIcon icon={faSearch} size='1x' onClick={handleHideSearch} className='absolute left-50 top-5.5 hidden text-white' />
          <FontAwesomeIcon onClick={handleToggle}  icon={faBars} size='2x' className='absolute right-5 cursor-pointer text-white' />
          <div ref={toggleRef} className='hidden absolute top-2 right-3 bg-white shadow-md rounded-md p-4 h-[400px] w-[200px] transition-all transform z-30'>
            <ul className='flex flex-col gap-4'>
              <FontAwesomeIcon icon={faXmark} size='2x' className='absolute right-3 top-3 cursor-pointer text-blue-400' onClick={hiddenMenu} />
              <li className='hover:border-b-1 border-black cursor-pointer  text-black'>Home</li>
              <li className='hover:border-b-1 border-black cursor-pointer  text-black'>Menu</li>
              <li className='hover:border-b-1 border-black cursor-pointer  text-black'>About</li>
              <li className='hover:border-b-1 border-black cursor-pointer  text-black'>Contact</li>
              <li className='hover:border-b-1 border-black cursor-pointer  text-black'>Cart</li>
            </ul>
          </div>
        </div>
      </div>
      {/* first main section for small devices*/}

      <div className='h-[100vh] md:hidden w-full bg-green-600'>
        <div className='h-[90px] w-full bg-pink-500 flex justify-around items-center'>
          <span className='font-bold'>
            <h1>Nile Eats</h1>
            <p>Order your favorite food!</p>
          </span>
          <span>
            <div className='h-[70px] w-[70px] rounded-[100%] bg-black'></div>
          </span>
        </div>
        <div className='h-[60px] w-full bg-yellow-500 flex flex-col justify-center items-center gap-10'>
          <input type='text' placeholder='Search for food' className='h-[40px] w-[90%] rounded-md border-1 p-2' />
        </div>
        <div className='h-[60px] w-full bg-blue-600 flex items-center justify-start overflow-x-scroll space-x-4 snap-x snap-mandatory'>
          {/* categories will be here */}
          <Cat />
          <Cat />
          <Cat />
          <Cat />
        </div>

        <div className='h-[calc(100vh-210px)] w-full bg-purple-500 overflow-y-scroll gap-4 flex flex-col items-center'>
          {/* food items will be here */}
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
        <div className='h-[80px] w-full bg-black fixed bottom-0 flex justify-around items-center text-white'>
          <FontAwesomeIcon icon={faHouse} size='2x' />
          <FontAwesomeIcon icon={faHeart} size='2x' />
          <FontAwesomeIcon icon={faMessage} size='2x' />
          <FontAwesomeIcon icon={faShoppingCart} size='2x' />
        </div>
      </div>

      {/* second main section for medium and large devices*/}
      <div className='w-full h-[90vh] hidden justify-center items-center md:flex'>
        <div className='h-[450px] w-[550px] absolute left-[20px] flex-col flex items-center justify-center text-white'>
          <h1>Are You Hungry?</h1>
          <h1 className=' text-7xl font-bold'>Don't Wait!</h1>
          <h1 className='text-3xl'>Let's order food now</h1>
          <button onMouseEnter={rotate} onMouseLeave={removeRotate} className='border-2 rounded-2xl text-[9px] cursor-pointer p-1 mt-4'>Check Out Menu</button>
          <div className='h-[100px] w-[400px] bg-red-600 absolute bottom-5 flex justify-center items-center'>
            <div className='h-[50px] w-[200px] bg-blue-600 flex justify-center items-center'></div>
            <div className='h-[25px] w-[25px] absolute bg-black left-23 rounded-full'>
              <FontAwesomeIcon icon={faLessThan} size='1x' className='text-white' />
            </div>
            <div className='h-[25px] w-[25px] absolute bg-black right-23 rounded-full'>
              <FontAwesomeIcon icon={faGreaterThan} size='1x' className='text-white' />
            </div>
          </div>
        </div>
        <div ref={spinRef} className='bg-pink-300 h-[400px] w-[400px] rounded-[100%] border-2 border-black absolute right-[200px]'>
          <img src={rice} alt="food" className='h-[400px] w-[400px] ' />
        </div>
        <div className='absolute h-[200px] w-[60px] bg-white right-0 flex flex-col justify-center items-center rounded-l-2xl hover:shadow-2xl'>
              <FontAwesomeIcon icon={faWhatsapp} size='2x' className='text-green-500 mt-4 cursor-pointer' />
              <FontAwesomeIcon icon={faFacebook} size='2x' className='text-blue-600 mt-4 cursor-pointer' />
              <FontAwesomeIcon icon={faInstagram} size='2x' className='text-pink-500 mt-4 cursor-pointer' />
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
