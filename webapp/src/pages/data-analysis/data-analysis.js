import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

import { getSapipinImages } from "../../services/services";
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
import { useGlobalState } from "../../shared/components/sidebar/sidebar";

const DataAnalysis = () => {
    const [dataset,setDataset] =  useGlobalState('dataset');
    const [plot] =  useGlobalState('plot');
    const [images, setImages] =   useState();
    
    useEffect(() =>{
        console.log(dataset)
        switch(dataset){
            case "sapipin":
                return getSapipinImages().then(data => {
                                setImages(data.data);
                        }).catch(err => {
                                console.log(err)
                            })
            case "easy":
                return  getEasyImages().then(data => {
                                setImages(data.data);
                        }).catch(err => {
                                console.log(err)
                            })
            case "keystroke2014":
                return getKeystroke2014Images().then(data => {
                                setImages(data.data);
                        }).catch(err => {
                                console.log(err)
                            })
            case "logicalstrong":
                return getLogicalstrongImages().then(data => {
                                setImages(data.data);
                        }).catch(err => {
                                console.log(err)
                            })
            case "strong":          
                return getStrongImages().then(data => {
                                setImages(data.data);
                        }).catch(err => {
                                console.log(err)
                            })

        }
        }, [dataset]);
    

    const renderImages = () => {
        if (plot == 'hist'){
            return images.hist.map(image => {
                return <img src={'http://localhost:5000/public/images' + image} />
            })
        }
        else{
            return images.line.map(image => {
                return <img src={'http://localhost:5000/public/images' + image} />
            })
        }
    }


    return <div className="content">
        <h2 id="dataTitle">Adatelemzés</h2>
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
            className="mySwiper">
            {images && renderImages().map((src) => {
                return <SwiperSlide>{src}</SwiperSlide> ;
                })}
        </Swiper>
        </>
    </div>
}

export default DataAnalysis;
