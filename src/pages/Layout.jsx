import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Layout () {
  return (
    <>
      <Nav />
      <main className='max-w-7xl m-auto px-4 lg:px-8'>
        <Outlet />
      </main>
    </>
  )
}
