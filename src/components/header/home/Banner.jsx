
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../../constants/data';


const responsive = {
    desktop: { 
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner=()=>{
    return (
        
        <Carousel responsive={responsive}>
        {
          bannerData.map((data, index) => (
            <img 
              key={index}
              src={data.url} 
              alt="banner" 
              aria-label={data.ariaLabel || `banner ${index + 1}`}
            />
          ))
        }
      </Carousel>

        
    )
}

export default Banner;