import React from 'react'


function FoodCard() {


  const handleOpenModal = () => {
    setShowModal(true);
  }
  return (
    <>
     <div onClick={handleOpenModal} className='h-[250px] w-full bg-white m-2 rounded-lg shadow-lg flex-shrink-0'>
      <img src='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='food' className='h-[150px] w-full rounded-t-lg'/>
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>Delicious Food</h2>
        <p className='text-gray-600'>A brief description of the food item.</p>
        <p className='text-green-600 font-bold mt-2'>$12.99</p>
      </div>
      </div>
      
    </>
   
  )
}

export default FoodCard;
