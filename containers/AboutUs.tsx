import React from 'react'
import starIcon from   "../src/assets/star.svg"
import militaryTextureImg from '../src/assets/military-texture.svg'

function AboutUs() {
  
  return (
    <main className='flex text-white flex-col gap-6 w-full p-6 items-center relative bg-url'>
      <div className="max-w-4xl">
        <h2 className='font-bold w-full sm:max-w-96 text-center text-black-300 text-3xl p-1'>SEJA BEM VINDO</h2>
        <p className='w-full  mt-3 text-center'>Entre no campo de batalha definitivo! Somos o destino para guerreiros implacáveis sedentos por adrenalina. Nossos cenários intensos, equipe altamente treinada e ênfase na estratégia e habilidade garantem confrontos épicos. Prepare-se para uma experiência de paintball de tirar o fôlego, onde apenas os mais destemidos sobrevivem. O desafio está lançado - você está pronto para enfrentá-lo?
        </p>        
        <div className="flex w-full justify-center mt-3">
          <img src={starIcon} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <img src={starIcon} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <img src={starIcon} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <img src={starIcon} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
          <img src={starIcon} className="w-6" alt={"Foto de estrela"} width={24} height={24} />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-50">
        <img src={militaryTextureImg} className="w-full h-full object-cover" alt={""}  />
      </div>         
    </main>
  )
}

export default AboutUs