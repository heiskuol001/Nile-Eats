import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'  
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import FoodCard from '../components/FoodCard'
import Cat from '../components/Cat'
import logo from '../assets/logo.png'
import rice from '../assets/rice.png'
import Drinks from '../components/Drinks';
import ChefCard from '../components/ChefCard';
import Footer from '../components/Footer'

const HomePage = () => {
  const focusInput = useRef();
  const [isScroll, setIscroll] = useState(false);
  const viewSection = useRef(null);
  const viewHome = useRef(null);
  const spinRef = useRef(null);
  const transformIcon = useRef(null);
  const transformIcon1 = useRef(null);
  const transformIcon2 = useRef(null);

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIscroll(true);
      } else {
        setIscroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [])


  const rotate = () => {
    spinRef.current.classList.toggle('animate-spin');
   
  }

  const scrollIntoView = () => {
    viewSection.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  function scrollHome() {
    viewHome.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  

  const removeRotate = () => {
    spinRef.current.classList.remove('animate-spin');
  }
  
  const handleTransform = () => {
    const form = transformIcon.current;
    form.style.transform = 'scale(2)';
    form.style.transition = 'ease-in-out';
    form.style.delay = '10s';
  
  }

    const handleTransform1 = () => {
    const form = transformIcon.current;
    form.style.transform = 'scale(1)';
    form.style.transition = 'ease-in-out';
    form.style.delay = '10s';
  }


 
  return (
    <div className='h-[250vh] w-full  relative overflow-hidden bg-red-600'>
      <div className=' bg-gray-800 hidden md:flex rounded-[100%] w-[780px] h-[780px] absolute top-[-10%] right-[-18%]'></div>
      {/*nav section*/}
      <div className={`hidden h-[15vh] w-full md:flex md:justify-center md:items-center fixed transition-all duration-500 ease-in-out ${isScroll? 'bg-white/30 backdrop-blur-2xl text-black shadow-md animate-slideDown' : 'bg-transparent text-white'} z-50 `}>
        <img src={logo} className='absolute left-2 h-[70px] w-[70px] top-1 bg-white rounded-full' alt="logo" />
        <ul className='flex gap-10 text-lg font-medium'>
          <li className='hover:border-b-1 border-white cursor-pointer font-bold '>
            <Link to='/' onClick={scrollHome} >HOME</Link>
          </li>
          <li className='hover:border-b-1 border-white cursor-pointer font-bold  '>
            <Link to='/'  >MENU</Link>
          </li>
          <li className='hover:border-b-1 border-white cursor-pointer font-bold '>
            <Link to='/' onClick={scrollIntoView}  >ABOUT</Link>
          </li>
        </ul>
        <div className=' h-[10vh] w-[300px] absolute right-0 flex justify-around items-center'>
          <input ref={focusInput} type='text' placeholder='Search for food' className='h-[30px] w-[180px] border-white border-1 p-2 absolute left-13' />
          <FontAwesomeIcon icon={faSearch} size='1x'  className='absolute left-50 top-5.5 hidden text-white' />
          
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
      <div ref={viewHome} className='w-full h-[90vh] hidden justify-center items-center md:flex'>
        <div className='h-[450px] w-[550px] absolute left-[20px] gap-3 flex-col flex items-center justify-center text-white'>
          <h1 className='text-5xl'>Are You Hungry?</h1>
          <h1 className=' text-8xl font-bold'>Don't Wait<span className='animate-bounce inline-block'  >!</span></h1>
          <h1 className='text-3xl'>Let's order food now</h1>
          <button onMouseEnter={rotate} onMouseLeave={removeRotate} className='border-2 rounded-2xl text-[9px] cursor-pointer p-2 mt-4 hover:bg-yellow-200 hover:text-black'>Check Out Menu</button>
          <div className='h-[70px] w-[400px] bg-red-500/30 backdrop-blur-md shadow-xl border-red-500/40 absolute bottom-0 flex justify-center items-center'>
            <div className='h-[50px] w-[300px] bg-blue-600 flex justify-center items-center'>
              <h1>hello</h1>
            </div>
            <div className='h-[25px] w-[25px] absolute bg-black left-10 rounded-full'>
              <FontAwesomeIcon icon={faLessThan} size='1x' className='text-white' />
            </div>
            <div className='h-[25px] w-[25px] absolute bg-black right-10 rounded-full'>
              <FontAwesomeIcon icon={faGreaterThan} size='1x' className='text-white' />
            </div>
          </div>
        </div>
        <div ref={spinRef}  className='bg-pink-300 h-[400px] w-[400px] rounded-[100%] border-2 border-black absolute right-[200px]'>
          <img src={rice} alt="food" className='h-[400px] w-[400px] ' />
        </div>
        <div  className='absolute h-[200px] w-[60px] bg-white right-0 flex flex-col justify-center items-center rounded-l-2xl hover:shadow-5xl'>
              <FontAwesomeIcon ref={transformIcon} onMouseOut={handleTransform1} onMouseOver={handleTransform} icon={faWhatsapp} size='2x' className='text-green-500 mt-4 cursor-pointer shadow-2xl' />
              <FontAwesomeIcon ref={transformIcon1} onMouseOut={() => transformIcon1.current.style.transform = 'scale(1)'} onMouseOver={() => transformIcon1.current.style.transform = 'scale(1.5)'} icon={faFacebook} size='2x' className='text-blue-600 mt-4 cursor-pointer' />
              <FontAwesomeIcon ref={transformIcon2} onMouseOut={() => transformIcon2.current.style.transform = 'scale(1)'} onMouseOver={() => transformIcon2.current.style.transform = 'scale(2)'} icon={faInstagram} size='2x' className='text-pink-500 mt-4 cursor-pointer' />
        </div>
      </div>

      <div className='w-full h-[280px] mt-14.5 bg-amber-50 z-100 md:flex flex-col  items-center hidden '>
        <h1 data-aos='fade-right' data-aos-once='false' className='font-bold text-4xl'>Top drinks</h1>
        <section className='w-full h-screen grid grid-cols-5 gap-2 pl-20 mt-10 overflow-hidden'>
          <Drinks />
          <Drinks />
          <Drinks />
          <Drinks />
          <Drinks />
        </section>
      </div>

      <div ref={viewSection} className='h-[360px] w-full bg-white flex-col flex gap-10 justify-center items-center'>
        <h1 className='h-[20px] font-bold text-4xl mt-6'>Chef of The Week</h1>
        <section className='flex gap-10 items-end h-[340px]'>
          <ChefCard aos='fade-right' type='false'/>
        <ChefCard aos='fade-left' type='false' />
        </section>
      </div>

      <div className='h-[300px] w-full'>
        <footer  />
      </div>
    </div>
  )
}

export default HomePage;
