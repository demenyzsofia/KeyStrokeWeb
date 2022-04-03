import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import { getSapipinImages } from "../../services/services";
import { getEasyImages } from "../../services/services";
import React, { useRef } from "react";
import "./data-analysis.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const DataAnalysis = () => {
    const [images, setImages] = useState();

    useEffect(() =>{
        getSapipinImages().then(data => {
            console.log(data)
            setImages(data.data.hist);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const renderImages = () => {
        return images.map(image => {
            
            return <img src={'http://localhost:5000/public/images' + image} />
        })
    }

    const [easyImages, seteasyImages] = useState();

    useEffect(() =>{
        getEasyImages().then(data => {
            seteasyImages(data.data);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const renderEasyImages = () => {
        return easyImages.line.map(image => {
            return <img src={'http://localhost:5000/public/images/' + image} />
        })
    }
    
    return <div className="content">
        <h2 id="dataTitle">Adatelemzés</h2>
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
            {easyImages && renderEasyImages().map((src) => {
                return <SwiperSlide>{src}</SwiperSlide> ;
                })}

        </Swiper>

        </>
    </div>
}

export default DataAnalysis;
