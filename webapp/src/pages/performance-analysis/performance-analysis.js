import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { getSapipinImages } from "../../services/services";
import React, { useRef } from "react";
import "./performance-analysis.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const PerformanceAnalysis = () => {
    const [images, setImages] = useState();

    useEffect(() =>{
        getSapipinImages().then(data => {
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

export default PerformanceAnalysis;