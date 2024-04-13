import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='bg-red' style={{background:"red",position:"absolute",marginTop:"100px"}} >Home</div>
      <Outlet/>
    </>
  
    
  )
}

export default Home