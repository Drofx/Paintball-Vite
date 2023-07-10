import Uploader  from '../components/Uploader';
import { thumbImg } from '../public'

function Header() {
  return (
    <header  className='relative w-full h-screen flex flex-col p-6 justify-center items-center' >
      <div className='absolute top-0 mt-24 mr-4 right-0 z-10 text-white rounded-sm text-center'>
        <Uploader title={thumbImg.name}>
        </Uploader>
      </div>
      <img 
        src={thumbImg.src}
        width={1980} 
        height={1080} 
        className='absolute w-screen h-screen object-cover -z-50 object-top brightness-25' 
        alt={'Header Image'}>
      </img>
      <div className='max-w-128 p-5 text-white  flex flex-col w-full' >
        <h1 className='text-4xl font-semibold'>Procurando um <br /> Campo de Paintball <br /> em para se aventurar?</h1>
        <h2 className='mt-3 sm:w-2/4'>Aqui na Tropa de Choque Paintball Clube, oferecemos todas essas atividades com uma estrutura completa e pensada  para você ter uma experiência inesquecível.</h2>
        <button className='bg-merge text-white-900 p-3 font-semibold shadow-lg w-fit mt-3 '>
          <a href="#valores">Agende um jogo agora!</a>  
        </button>
      </div>
    </header>
  )
}

export default Header