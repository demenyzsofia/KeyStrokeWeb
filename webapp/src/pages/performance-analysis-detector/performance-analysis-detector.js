import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { getDetectorsBoxImages } from "../../services/services";
import React, { useRef } from "react";
import "./performance-analysis-detector.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useGlobalState } from "../..";


const PerformanceAnalysisDetector = () => {
    const [detector] =  useGlobalState('detector');
    const [images, setImages] = useState();

    useEffect(() =>{
        getDetectorsBoxImages().then(data => {
            setImages(data.data);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const renderImages = () => {
        return images[detector].map(image => {
            return <div className="detectorImages"><img src={'http://localhost:5000/public/images/' + image} /></div>
        })
    }
    
    
    
    return  <div className="content">
        <h2 id="performanceTitle">Teljesítményelemzés</h2>
        <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mydetectorSwiper">
            {images && renderImages().map((src) => {
                return <SwiperSlide  className="swiperslide">{src}</SwiperSlide> ;
                })}
        </Swiper>
        </>
       
       
    </div>
}

export default PerformanceAnalysisDetector;