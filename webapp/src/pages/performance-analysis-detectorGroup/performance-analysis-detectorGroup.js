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
import { useGlobalState } from "../..";
import i18n from "../../translations/i18n";


const PerformanceAnalysisDetectorGroup = () => {
    const [dataset] =  useGlobalState('dataset');
    const [detectorGroup] =  useGlobalState('detectorGroup');
    const [images, setImages] = useState()
    const { t } = useTranslation(); 

    useEffect(() =>{
        getImages(dataset).then(data => {
            console.log(data.data)
            setImages(data.data);
        }).catch(err => {});
        i18n.changeLanguage(localStorage.getItem('lng') != null ? localStorage.getItem('lng') : 'hu');
    }, [detectorGroup, dataset]);




    const renderRoccurveImages = () => {
        return images.roccurve.map(image => {
            return <img src={'http://localhost:5000/public/images/' + image} />
        })
    }
    const renderBoxImages = () => {
        return images.box.map(image => {
            return <div className="detectorGroupImages"><img src={'http://localhost:5000/public/images/' + image} /></div>
        })
    }
    
    
    
    return  <div className="content">
        <h2 id="performanceTitle">{t("pages.performance-analysis.title")}</h2>
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
            className="myDetectorGroupSwiper">
           
            <SwiperSlide  className="swiperslide"> {images && renderRoccurveImages()[detectorGroup]}</SwiperSlide> 
            <SwiperSlide  className="swiperslide"> {images && renderBoxImages()[detectorGroup]}</SwiperSlide> 
        </Swiper>
        </>
       
       
        
       
    </div>
}

export default PerformanceAnalysisDetectorGroup;