import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart () {
  const { cart } = useCart()

  return (
    <Link to='/carrito'>
      <button className='relative w-10 h-10 group'>
        <svg
          className='fill-neutral-500 group-hover:fill-neutral-200 w-8 h-8'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z' />
          <circle cx='10.5' cy='19.5' r='1.5' />
          <circle cx='17.5' cy='19.5' r='1.5' />
        </svg>
        <span className='absolute top-0 right-0 text-xs text-black bg-yellow-500 px-1 rounded group-hover:bg-yellow-400'>
          {cart.length}
        </span>
      </button>
    </Link>
  )
}
