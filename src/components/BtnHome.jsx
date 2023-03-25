import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnHome () {
  return (
    <Link to='/'>
      <button>
        <h1 className='h-10 p-2'>Ecommerce</h1>
      </button>
    </Link>
  )
}
