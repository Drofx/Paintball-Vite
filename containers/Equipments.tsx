import Uploader  from '../components/Slider';
import Section  from '../components/Section';
import { equipmentGunImg,equipmentVestImg,equipmentMaskImg } from '../public';

function Equipements() {

  return (
    <Section>
      <div className="w-full flex items-center gap-3 flex-col text-white bg-zinc-900">
        <div className="flex flex-col items-center p-6 gap-3">
          <h2 className="font-semibold p-2 rounded-sm w-fit text-center bg-merge">Equipamentos</h2>
          <p className="text-center">Com nossos equipamentos de paintball, você tem suporte para jogar com segurança e se divertir. Temos máscaras, marcadores e acessórios de qualidade para uma experiência incrível.</p>
        </div>
        <div className=" grid w-full gap-3 sm:grid-cols-3">
          <div className="relative flex items-center flex-col font-bold gap-3">
            <div className='absolute top-0 mt-4 mr-4 right-0 z-10 text-white rounded-sm text-center'>
              <Uploader title={equipmentGunImg.name}>
              </Uploader>
            </div>
            <img src={equipmentGunImg.src} width={500} height={500} className="shadow-lg w-full h-full" alt="Imagem de arma" />
          </div>
          <div className="relative flex items-center flex-col font-bold gap-3">
            <div className='absolute top-0 mt-4 mr-4 right-0 z-10 text-white rounded-sm text-center'>
              <Uploader title={equipmentVestImg.name}>
              </Uploader>
            </div>
            <img src={equipmentVestImg.src} width={500} height={500}className="shadow-lg w-full h-full" alt="Imagem de colete" />
          </div>
          <div className="relative flex items-center flex-col font-bold gap-3">
            <div className='absolute top-0 mt-4 mr-4 right-0 z-10 text-white rounded-sm text-center'>
              <Uploader title={equipmentMaskImg.name}>
              </Uploader>
            </div>
            <img src={equipmentMaskImg.src} width={500} height={500}className="shadow-lg w-full h-full" alt="Imagem de máscara" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Equipements
