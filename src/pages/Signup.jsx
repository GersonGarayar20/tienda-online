import React from 'react'
import FormSignup from '../components/FormSignup'
import { Link } from 'react-router-dom'

export default function Signup () {
  return (
    <>
      <img
        className='fixed -z-50 w-full h-screen object-cover brightness-50'
        src='./bg.jpg'
        alt=''
      />
      <div className='flex justify-end'>
        <section className='bg-white lg:w-[700px] w-full h-screen pt-16'>
          <div className='max-w-md m-auto px-8'>
            <div className='py-8'>
              <h1 className=' text-2xl font-bold'>SignUp</h1>
            </div>
            <FormSignup />
            <div className='py-8'>
              <p className='text-center'>
                Ya tienes una cuenta?
                <Link to='/login'>
                  <span className='ml-2 text-sky-500 hover:underline'>
                    inicia sesion
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
