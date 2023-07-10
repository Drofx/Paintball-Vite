import Button  from '../components/Button';
import Section  from '../components/Section';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function AddServices() {

  const { register, handleSubmit } = useForm();

  const onSubmitCharges = (data:any) => {
    axios.post('https://projectpaintball.azurewebsites.net/match', {
      time: 0,
      numberBalls: data.chargeQuantityBullets,
      price: data.chargeValue,
      isRecharge: true
    })
    .then(response => {
      console.log('Post request successful');
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error making post request:', error);
    });
  };

  const onSubmitGame = (data:any) => {
     axios.post('https://projectpaintball.azurewebsites.net/match', {
      time: data.gameTime,
      numberBalls: data.gameQuantityBullets,
      price: data.gameValue,
      isRecharge: false
    })
    .then(response => {
      console.log('Post request successful');
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error making post request:', error);
    }); 
  };

  return (
    <Section>
      <div className="flex flex-col w-full items-center justify-center text-white bg-zinc-900">
        <h2 className="font-semibold p-2 mt-6 rounded-sm  w-fit text-center bg-merge">Adicionar valores</h2>
        <div className={"w-full flex-col flex md:flex-row"}>
          <form onSubmit={handleSubmit(onSubmitGame)} className='flex-1 flex-col flex p-6 gap-3'>
              <h3 className="font-bold text-lg">Adicionar Jogo</h3>
              <input {...register('gameTime')} type="text" className='h-14 indent-3 bg-transparent border-white rounded-lg border w-full' placeholder='Tempo'/>
              <input {...register('gameQuantityBullets')} type="text" className='h-14 indent-3 bg-transparent border-white rounded-lg border w-full' placeholder='Bolinhas'/>
              <input {...register('gameValue')} type="text" className='h-14 indent-3 bg-transparent border-white rounded-lg border w-full' placeholder='Valor do jogo'/>
              <Button>Adicionar</Button>
          </form>
          <form onSubmit={handleSubmit(onSubmitCharges)} className='flex-1 flex-col flex p-6 gap-3'>
              <h3 className="font-bold text-lg">Adicionar Recarga</h3>
              <input {...register('chargeValue')} type="text" className='h-14 indent-3 bg-transparent border-white rounded-lg border w-full' placeholder='Vaor da Recarga'/>
              <input {...register('chargeQuantityBullets')} type="text" className='h-14 indent-3 bg-transparent border-white rounded-lg border w-full' placeholder='Bolinhas'/>
              <Button>Adicionar</Button>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default AddServices