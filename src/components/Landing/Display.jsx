import React from 'react'
import LandingPage from './LandingPage'
import Login from '../Login/Login'

const Home = () => {
  return (
    <div className='flex-col h-full w-full '>
      <LandingPage />
      <Login />
    </div>
  )
}

export default Home
