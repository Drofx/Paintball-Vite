

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Select from 'react-select';

function SelectServices(props:any) {

  const gameTime = props.gameTime.map((item:any)=> ({label:`${item.time} Hora(s)`,value:item.time}) )

  const [gameDate,setGameDate] = useState()

  const [gameHours,setGameHours] = useState([])

  const [gamePlayers,setGamePlayers] = useState([])

  const { register, handleSubmit,control } = useForm();

  function onSubmitService(data:any) {
    console.log(data);
  };

  function handleGetHours(event:any) {
    const value = event.target.value

    if (Date.parse(value)) {

    } else {
    }
  }

  const classNames = {
    control: () => 'h-14 bg-zinc-900 text-white',
    container: () => 'bg-zinc-900 text-white',
    menu: () => 'bg-zinc-900 text-white',
    menuList: () => 'bg-zinc-900 text-white',
    option: (state:any) =>
      state.isSelected ? 'bg-merge text-white' : 'hover:bg-zinc-800 bg-zinc-900 text-white',
  }

  const selectStyles = {
    control: (baseStyles:any) => ({
      ...baseStyles,
      backgroundColor: 'none',
    }),
    option: (baseStyles:any) => ({
      ...baseStyles,
      backgroundColor: 'none',
    }),
  }

  return (
    <form className='relative flex flex-col text-white gap-3' onSubmit={handleSubmit(onSubmitService)}>
      <input
        {...register('name')}
        type='text'
        className='h-14 indent-3 bg-transparent border-white rounded-lg border'
        placeholder='Nome'
      />
      <input
        {...register('phone')}
        type='text'
        className='h-14 indent-3 bg-transparent border-white rounded-lg border'
        placeholder='Numero de Telefone'
      /> 
      <Controller
        control={control}
        name="gameDate"
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            onChange={handleGetHours}
            type="date"
            className="h-14 p-3 bg-transparent border-white rounded-lg border"
          />
        )}
      />
      <Controller
        control={control}
        name="gameTime"
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            options={gameTime}
            placeholder="Tempo de Jogo"
            classNames={classNames}
            styles={selectStyles}
          />
        )}
      />
      <Controller
        control={control}
        name="gamePlayers"
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            options={gamePlayers}
            placeholder="Quantidade de Jogadores"
            classNames={classNames}
            styles={selectStyles}
          />
        )}
      />
      <Controller
        control={control}
        name="gameHours"
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            options={gameHours}
            placeholder="Horários"
            classNames={classNames}
            styles={selectStyles}
          />
        )}
      />
      <Button>Agendar</Button>
    </form>
  );
}

export default SelectServices;

