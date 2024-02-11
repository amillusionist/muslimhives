import { useEffect, useRef } from 'react';
import Image from "next/image";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BusinessLoopCard from "./BusinessLoopCard"

function Carousel({ slidesPerView }) {
    const swiperRef = useRef(null);
  
    useEffect(() => {
      swiperRef.current = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: slidesPerView,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  
      return () => {
        if (swiperRef.current) {
          swiperRef.current.destroy();
        }
      };
    }, [slidesPerView]);
  
    const goToNextSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };
  
    const goToPrevSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };
  
    return (
      <div className="swiper-container" style={{ position: 'relative' }}>
        <div className="swiper-wrapper">
        <div className="swiper-slide">
            <BusinessLoopCard photo="https://content.jdmagicbox.com/comp/pune/l3/020pxx20.xx20.220713070521.u3l3/catalogue/zariya-the-band-pimpri-chinchwad-new-town-pune-jh9ugqgslz.jpg" name="Soulted Stories" description='Pune,Kondhwa Khurd' onClick={"#"}/>
        </div>
        <div className="swiper-slide">
            <BusinessLoopCard photo="https://content.jdmagicbox.com/comp/pune/p5/020pxx20.xx20.121116133635.l2p5/catalogue/hotel-dreams-restaurants-talawade-pune-north-indian-restaurants-hff71woydz.jpg?clr=#3a2c3a" name="Vijaywada" description='Pune,Kondhwa Khurd' onClick={"#"}/>
        </div>
        <div className="swiper-slide">
            <BusinessLoopCard photo="https://content.jdmagicbox.com/comp/pune/h5/020pxx20.xx20.140725093918.q5h5/catalogue/tasty-punjab-magarpatta-city-hadapsar-pune-punjabi-restaurants-0076kuvhwk.jpg" name="Kondhana" description='Pune,Kondhwa Khurd' onClick={"#"}/>
        </div>
        <div className="swiper-slide">
            <BusinessLoopCard photo="https://content.jdmagicbox.com/comp/pune/v9/020pxx20.xx20.231108100628.l7v9/catalogue/fiesta-family-restaurant-and-bar-wakad-pune-restaurants-py51y84qqu.jpg?clr=#223944" name="Peeragarhi Mosque" description='Pune,Kondhwa Khurd' onClick={"#"}/>
        </div>
        <div className="swiper-slide">
            <BusinessLoopCard photo="https://content.jdmagicbox.com/comp/pune/p6/020pxx20.xx20.191203114828.u7p6/catalogue/hotel-shauryawada-and-family-restaurant-handewadi-pune-restaurants-2sfocqovl8.jpg" name="Jhandewalan" description='Pune,Kondhwa Khurd' onClick={"#"}/>
        </div>
        <div className="swiper-slide">
            <BusinessLoopCard photo="https://content.jdmagicbox.com/comp/pune/h5/020pxx20.xx20.140725093918.q5h5/catalogue/tasty-punjab-magarpatta-city-hadapsar-pune-punjabi-restaurants-0076kuvhwk.jpg" name="Kondhana" description='Pune,Kondhwa Khurd' onClick={"#"}/>
        </div>
        
        
        </div>
        <div className="swiper-button-prev" onClick={goToPrevSlide}></div>
        <div className="swiper-button-next" onClick={goToNextSlide}></div>
      </div>
    );
  }
  
  export default Carousel;