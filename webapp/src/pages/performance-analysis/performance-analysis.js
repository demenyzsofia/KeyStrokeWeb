import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getSapipinImages } from "../../services/services";
import "../../translations/i18n";
import "./performance-analysis.css"


const PerformanceAnalysis = () => {
    const [images, setImages] = useState();

    useEffect(() =>{
        getSapipinImages().then(data => {
            setImages(data.data);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const renderImages = () => {
        return images.map(image => {
            return <img src={'http://localhost:5000/public/images' + image} />
        })
    }

    return  <div className="content">
        <h2 id="performanceTitle">PerformanceAnalysis</h2>
        {images && renderImages()}
    </div>
}

export default PerformanceAnalysis;