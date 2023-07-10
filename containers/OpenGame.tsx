import Uploader  from '../components/Uploader';
import Section  from '../components/Section';
import { openGame } from '../public/index'

function OpenGame() {
  return (
    <Section>
      <div className="max-w-7xl flex flex-col bg-zinc-900 shadow-2xl md:flex-row text-white">
        <div className="p-6 w-full md:w-2/4 flex flex-col justify-center items-center gap-3">
          <h2 className='bg-merge font-semibold text-center text-white p-2 rounded-sm w-fit'>Jogo aberto</h2>
          <p className='w-full mt-3 text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus, incidunt perferendis quam laborum unde temporibus iure odio molestiae reprehenderit ipsa, et, quisquam quod voluptatibus qui 
          </p>
        </div>
        <div className=" grid w-full gap-3 sm:grid-cols-2">
          {openGame.map((game: { name: any; src: string | undefined; },index:number) => (
            <div key={index} className="relative flex items-center w- flex-col flex-1 font-bold gap-3">
              <div className='absolute top-0 mt-4 mr-4 right-0 z-10 text-white rounded-sm text-center'>
                <Uploader title={game.name}>
                </Uploader>
              </div>
              <img src={game.src} width={500} height={500} className="shadow-lg w-full h-full" alt="imgm de arma" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default OpenGame