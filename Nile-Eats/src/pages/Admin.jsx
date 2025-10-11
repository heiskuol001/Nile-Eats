import React from 'react'

function Admin() {
  return (
    <div className='h-[100vh] w-full bg-gray-100 relative'>
          <h1>Admin Page</h1>
          <form action="">
            <input type="text" placeholder='Food name' />
            <input type="text" placeholder='Category' />
            <input type="number" placeholder='Price' />
            <input type="file" />
            <button type='submit'>Add Food</button>
          </form>
    </div>
  )
}

export default Admin
