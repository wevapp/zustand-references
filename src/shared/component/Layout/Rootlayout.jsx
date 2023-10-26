import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Rootlayout = () => {

  return (
    <div>
        <Link 
            className='bg-slate-200 rounded ml-8 p-2 font-bold underline'
            to='/add'
         >Add Person</Link>
        <Link 
            className='bg-slate-200 rounded ml-8 p-2 font-bold underline'
            to='/list
         '>List of people</Link>
        <Outlet />
    </div>
  )
}

export default Rootlayout