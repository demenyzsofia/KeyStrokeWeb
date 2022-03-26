import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import "./home.css"

const Home = () => {
    const { t } = useTranslation(); 
    return <div className="content">
                <h2 id="scope">{t("pages.home.title")}</h2>
                <p>{t("pages.home.introduction")}</p>
                <p>{t("pages.home.content")}</p>
                <ol className="list">
                    <li><b><i>{t("pages.home.listing.1")}</i></b></li>
                    <li><b><i>{t("pages.home.listing.2")}</i></b></li>
                    </ol>                    
                <p>{t("pages.home.data")}</p>
                <p>{t("pages.home.performance")}</p>                   
        </div> 
        
}

export default Home;
