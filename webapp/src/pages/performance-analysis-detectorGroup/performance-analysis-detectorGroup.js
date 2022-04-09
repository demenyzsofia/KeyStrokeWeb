import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { getImages, getSapipinImages } from "../../services/services";
import React, { useRef } from "react";
import "./performance-analysis-detectorGroup.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { DATASET } from "../../shared/constants/datasets";


const PerformanceAnalysisDetectorGroup = () => {
    const [images, setImages] = useState();

    useEffect(() =>{
        getImages(DATASET.SAPIPIN).then(data => {
            console.log(data.data)
            setImages(data.data);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const renderImages = () => {
        return images.roccurve.map(image => {
            return <img src={'http://localhost:5000/public/images/' + image} />
        })
    }
    
    
    
    return  <div className="content">
        <h2 id="performanceTitle">Teljesítményelemzés</h2>
        <>
        {/* <Swiper
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
            className="mySwiper">
            {images && renderImages().map((src) => {
                return <SwiperSlide>{src}</SwiperSlide> ;
                })}
        </Swiper> */}
        </>
       
        {images && renderImages()[0]}
       
    </div>
}

export default PerformanceAnalysisDetectorGroup;