import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function Cart () {
  const [logged, setLogged] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getSession()
  }, [])

  const getSession = async () => {
    const { data } = await supabase.auth.getSession()
    setLogged(!!data.session)
  }

  const handleClick = async () => {
    if (logged) {
      await supabase.auth.signOut()
      setLogged(false)
    } else {
      navigate('/login')
    }
  }
  return (
    <button className='text-sm px-4 h-10' onClick={handleClick}>
      {logged ? 'Cerrar session' : 'Iniciar session'}
    </button>
  )
}
