import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import Uploader from './Uploader';

function Slider(props:any) {

  return (
    <div className='flex flex-col gap-3 w-full items-center'>
      <Lightbox
        open={true}
        plugins={[Inline]}
        className='w-full'
        inline={{ style: { width: "100%",height:"100%", aspectRatio: "3 / 2"} }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={props.slides}
        render={{
          slide: ({ slide }) => {
            return(
              <div className='relative w-full h-full'>
                <div className='absolute top-0 mt-4 mr-4 right-0 z-10 text-white rounded-sm text-center'>
                  <Uploader title={slide.name}>
                  </Uploader>
                </div>     
                <img className='w-full object-cover h-full ' src={slide.src} width={1980} height={1080} alt={''}></img>;
              </div>
            )
          }}}
      /> 
    </div>
  )
}

export default Slider