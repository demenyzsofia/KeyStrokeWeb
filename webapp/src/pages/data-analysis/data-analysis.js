import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

import { getImages, getSapipinImages } from "../../services/services";
import { getEasyImages } from "../../services/services";
import { getKeystroke2014Images } from "../../services/services";
import { getLogicalstrongImages } from "../../services/services";
import { getStrongImages } from "../../services/services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./data-analysis.css"
import { useGlobalState } from "../..";
import { DATASET } from "../../shared/constants/datasets";
import { DIAGRAMTYPE } from "../../shared/constants/diagram-types";

const DataAnalysis = () => {
    const [dataset,setDataset] =  useGlobalState('dataset');
    const [diagramType] =  useGlobalState('diagramType');
    const [images, setImages] =   useState();
    
    useEffect(() =>{
        console.log(dataset)
        getImages(dataset).then(data => {
                setImages(data.data);
        }).catch(err => {})
        }, [dataset]);
    

    const renderImages = () => {
        return images[diagramType].map(image => {
            return <div className="data-analysis-image">
                    <img src={'http://localhost:5000/public/images' + image} />
                </div>
        })
    }


    return <div className="content">
        <h2 id="dataTitle">Adatelemzés</h2>
        <p>A kiválaszotott adathalmaz:</p>
        <p id="selected-dataset"><b>{dataset}</b></p>
        {diagramType === DIAGRAMTYPE.HIST && <a href="/basic-concepts/#hist-text">{'Jellemzők hisztogramjai'}</a>}
        {diagramType === DIAGRAMTYPE.LINE && <a href="">{'Felhasználók gépelési ritmusai'}</a>}     
        <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            {images && renderImages().map((src) => {
                return <SwiperSlide className="swiperSlides">{src}</SwiperSlide> ;
                })}
        </Swiper>
        </>
    </div>
}

export default DataAnalysis;
