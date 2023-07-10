import { useEffect, useState } from "react"
import Section from "../components/Section"
import SelectServices from "./SelectServices"
import axios from "axios";
import Button from "../components/Button";

export default function ClientList() {

  const [gameValues,setGameValues] = useState([])

  const [formState,setFormState] = useState(false)

  useEffect(() => {      
    axios.get('https://projectpaintball.azurewebsites.net/match')
    .then((response:any) => {
      setGameValues(response.data)
    })
    .catch((error: any) => {
      console.error(error);
    }); 
  }, [])

  return (
  <>
    <Section>
        <div className="gap-6 flex flex-col w-full h-screen mt-40 text-white ">
          <h2 className="font-semibold p-2 rounded-sm w-fit text-center bg-merge ">Agendamentos</h2>
          <div onClick={()=>setFormState(true)} className=" cursor-pointer h-20 flex items-center gap-6 px-6 bg-zinc-900">
            <p>Data</p>
            <p>Horarios</p>
            <p>Nome</p>
          </div>
        </div>
        {formState&&
        <div className="h-screen fixed w-screen bg-zinc-900  top-0 left-0 flex justify-center items-center z-50">
          <Section>
            <div className="gap-3 flex flex-col">
              <Button onClick={()=>setFormState(false)} >Voltar</Button>
               <SelectServices gameTime={gameValues.filter((item:any)=>!item.isRecharge)}></SelectServices>
            </div>
          </Section>
        </div>
        }
    </Section>
  </>
  )
}
