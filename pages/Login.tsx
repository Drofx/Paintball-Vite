import React, { useContext, useEffect } from "react"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import  {AuthContext}  from '../contexts/AuthContext'

export default function Login() {
  
  const {register, handleSubmit} = useForm()

  const {signIn}:any = useContext(AuthContext)

  async function handleSingIn(data:any) {

    await signIn(data)

  } 

  return (
  <>   
    <form onSubmit={handleSubmit(handleSingIn )} className="w-scren h-screen text-white flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col text-white items-center">
          <p className=' font-bold text-lg'>TROPA DE CHOQUE</p>
          <p >Paintball Club</p>
        </div>
        <input {...register("email")} type="text" className='h-10 xl:w-80 w-9/12 indent-3 bg-transparent border-white rounded-lg border' placeholder='E-mail'/>
        <input {...register("password")} type="password" className='h-10 xl:w-80 w-9/12 indent-3 bg-transparent border-white rounded-lg border' placeholder='Senha'/>
        <Button>Entrar</Button>
    </form>  
  </>

  )
} 