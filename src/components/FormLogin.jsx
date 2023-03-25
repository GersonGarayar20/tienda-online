import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

// falta el manejo de errores

export default function FormLogin () {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setEmailError(email.length === 0)
    setPasswordError(password.length === 0)

    if ((emailError, passwordError)) return

    const { data } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (data.session) return navigate('/')
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div>
        <p className='font-bold mb-2'>Correo electronico</p>
        <input
          className={`border w-full p-3 focus:outline ${
            emailError && 'border-red-500 outline-none text-red-500'
          }`}
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Correo electronico'
        />
        {emailError && (
          <p className='text-red-500 py-2'>Email no puede estar en blanco</p>
        )}
      </div>

      <div>
        <p className='font-bold mb-2'>Contraseña</p>
        <input
          className={`border w-full p-3 focus:outline ${
            passwordError && 'border-red-500 outline-none text-red-500'
          }`}
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Contraseña'
        />
        {passwordError && (
          <p className='text-red-500 py-2'>Password no puede estar en blanco</p>
        )}
      </div>

      <button className='p-3 bg-black text-white'>Iniciar Session</button>
    </form>
  )
}
