import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

import { getImages } from "../../services/services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import "./data-analysis.css"
import { useGlobalState } from "../..";

const DataAnalysis = () => {
    const { t } = useTranslation(); 
    const [dataset] =  useGlobalState('dataset');
    const [diagramType] =  useGlobalState('diagramType');
    const [images, setImages] =   useState();
    
    useEffect(() =>{
        getImages(dataset).then(data => {
                setImages(data.data);
        }).catch(err => {})
        }, [dataset]);
    

    const renderImages = () => {
        return images[diagramType].map(image => {
            return <div className="dataImages">
                    <img src={'http://localhost:5000/public/images' + image} />
                </div>
        })
    }

    return <div className="content" >
        <h2 id="dataTitle">{t('pages.data-analysis.title')}</h2> 
        <>
        
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="myDataSwiper">
            {images && renderImages().map((src) => {
                return <SwiperSlide >{src}</SwiperSlide> ;
                })}
        </Swiper>
        </>
    </div>
}

export default DataAnalysis;
