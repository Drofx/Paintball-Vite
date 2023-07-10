import { useEffect, useState } from 'react'
import Section from '../components/Section'
import SelectServices from '../containers/SelectServices'
import axios from 'axios';
import trashIcon from '../src/assets/trash.svg'

function Booking() {

  const [gameValues,setGameValues] = useState([])

  useEffect(() => {
    console.log(gameValues)
  }, [gameValues])

  useEffect(() => {      
    axios.get('https://projectpaintball.azurewebsites.net/match')
    .then((response:any) => {
      setGameValues(response.data)
    })
    .catch((error: any) => {
      console.error(error);
    }); 
  }, [])
    
  function handleDelete(id: any) {
    
  }

  return (
    <Section>
      <div className="flex flex-col w-full items-center  justify-center text-white bg-zinc-900 ">
        <h2 className="font-semibold p-2 mt-6 rounded-sm  w-fit text-center bg-merge">Agendamento</h2>
        <div className="flex flex-col  w-full md:flex-row-reverse">
          <div className="flex flex-col p-6 w-full md:w-2/4 gap-3">
            <h2 className="font-bold text-lg">Valores</h2>
            {gameValues.map((item:any,index:number) => !item.isRecharge&&
            <div key={index} className='flex items-center justify-between w-full p-6 shadow-lg gap-3 bg-zinc-800'>
              <div className={"flex items-center gap-3"}>
                <p className="font-semibold">R${item.price}:</p>
                <div className="flex-col flex">
                  <p>{item.time} {item.time>1?"Horas":"Hora"}</p>
                  <p>{item.numberBalls} Bolinhas</p>
                </div>
              </div>
              <div onClick={()=>handleDelete(item.id)} className='h-full'>
                <img src={trashIcon} className='w-6' alt="" />
              </div>
            </div>
            )}
            <h2 className="font-bold text-lg">Recargas:</h2>
            {gameValues.map((item:any,index:number) => item.isRecharge&&
              <div key={index} className='flex items-center justify-between w-full p-6 shadow-lg gap-3 bg-zinc-800'>
                <div className={"flex gap-3"}>
                  <p className="font-semibold">R${item.price}:</p>
                  <p>{item.numberBalls} Bollinhas</p>
                </div>
                <div onClick={()=>handleDelete(item.id)} className='h-full'>
                  <img src={trashIcon} className='w-6' alt="" />
                </div>
              </div>
            )}
          </div>
          <div id="agendamento" className="flex p-6 flex-col w-full md:w-2/4 gap-3">
            <h2 className="font-bold text-lg">Agende seu jogo agora</h2>
            <SelectServices gameTime={gameValues.filter((item:any)=>!item.isRecharge)} />
          </div>
        </div>          
      </div>
    </Section>
  )
}

export default Booking
