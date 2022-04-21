import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import "./home.css"

const Home = () => {
    const { t } = useTranslation(); 
    return <div className="content">
                <h2 id="scope">{t("pages.home.title")}</h2>
                <div className="text">
                    <p>{t("pages.home.introduction")}</p>
                    <p>{t("pages.home.content1")}<a href="/datasets"><b><i>{t("pages.home.datasets")}</i></b></a>{t("pages.home.content2")}</p>
                    <ol className="list">
                        <li><b><i>{t("pages.home.listing.dataAnalysis")}</i></b></li>
                        <li><b><i>{t("pages.home.listing.performanceAnalysis")}</i></b></li>
                        </ol>                    
                    <p>{t("pages.home.data")}</p>
                    <p>{t("pages.home.performance")}</p>      
                </div>             
        </div> 
        
}

export default Home;
