import { useCart } from '../context/CartContext'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'
import CardCartProduct from '../components/CardCartProduct'
import CarritoVacio from '../components/CarritoVacio'

export default function Carrito () {
  const { cart, verTotal } = useCart()

  const navigate = useNavigate()

  const handleClick = async () => {
    const { data } = await supabase.auth.getSession()

    if (data.session) {
      console.log('compra realizada')
      navigate('/pago')

      // guardar un registro de compra
    } else {
      navigate('/signup')
    }

    // supabase.auth.getUser()
  }

  if (cart.length === 0) return <CarritoVacio />
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-8 py-16'>
        <section className='flex-1'>
          <div className='pb-4'>
            <h1 className='text-slate-900 text-2xl font-bold'>
              Carrito de compras
            </h1>
          </div>
          <ul className='flex flex-col divide-y'>
            {cart.map(({ id, nombre, imagen, precio, cantidad }) => (
              <CardCartProduct
                key={id}
                id={id}
                nombre={nombre}
                imagen={imagen}
                precio={precio}
                cantidad={cantidad}
              />
            ))}
          </ul>
        </section>
        <aside className='lg:w-[400px] '>
          <div className='p-6 bg-neutral-100'>
            <div className='flex justify-between pb-4'>
              <p className='font-bold'>Subtotal en el carrito</p>
              <p className='font-bold text-green-500'>S/ {verTotal()}</p>
            </div>
            <p className='text-slate-500 text-sm pb-4'>
              Los gastos de envío e IVA se calcularán en la pantalla de compra
            </p>
            <button
              className='w-full text-white text-lg font-bold py-4 bg-green-600 hover:bg-green-800 transition-all'
              onClick={handleClick}
            >
              Finalizar compra y pagar
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}
