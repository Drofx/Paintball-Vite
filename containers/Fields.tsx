import Slider  from '../components/Slider';
import Section  from '../components/Section';
import { field1, field2, field3, field4 } from '../public'

function Fields() {
  return (
    <Section>
      <div className="w-full flex items-center flex-col bg-zinc-900 text-white">
        <div className="flex flex-col items-center p-6 gap-3">
          <h2 className="font-semibold text-white p-2 rounded-sm text-center bg-merge">Nossos Campos</h2>
          <p className="text-center">Possuimos 4 campos a sua escolha, onde você ira poder destruir seus adversarios.</p>
        </div>
        <div className="grid w-full gap-3 sm:grid-cols-2">
          <div className="relative w-full flex items-center flex-col gap-3">
            <h3 className="absolute top-0 mt-3 left-0 z-10 text-white p-2 rounded-sm text-center bg-zinc-900">Latas</h3>
            <Slider slides={field1} />
          </div>
          <div className="relative w-full flex items-center flex-col gap-3">
            <h3 className="absolute top-0 mt-3 left-0 z-10 text-white p-2 rounded-sm text-center bg-zinc-900">Favela</h3>
            <Slider slides={field2} />
          </div>
          <div className="relative w-full flex items-center flex-col gap-3">
            <h3 className="absolute top-0 mt-3 left-0 z-10 text-white p-2 rounded-sm text-center bg-zinc-900">Mata</h3>
            <Slider slides={field3} />
          </div>
          <div className="relative w-full flex items-center flex-col gap-3">
            <h3 className="absolute top-0 mt-3 left-0 z-10 text-white p-2 rounded-sm text-center bg-zinc-900">Em breve</h3>
            <Slider slides={field4} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Fields
