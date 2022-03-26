import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import "./python-basics.css"

const PythonBasics = () => {
    const { t } = useTranslation(); 
    return <div className="content">
            <h2 id="basics">{t('pages.python-basics.title')}</h2>
            <p>{t('pages.python-basics.introduction')}</p>
            <p>{t('pages.python-basics.content')}</p>
            <ul className="categories">
                <li>{t('pages.python-basics.listing.1')}</li>
                <li>{t('pages.python-basics.listing.2')}</li>
                <li>{t('pages.python-basics.listing.3')}</li>
                <li>{t('pages.python-basics.listing.4')}</li>
                <li>{t('pages.python-basics.listing.5')}</li>
            </ul>
            <p>{t('pages.python-basics.sclearn')}</p>
            <h3>{t('pages.python-basics.subtitle')}</h3>   
            <p>{t('pages.python-basics.knn-intro')}</p> 
            <div className="code">
                <p className="comment"><b><i>{t('pages.python-basics.code.row1')}</i></b></p> 
                <p><b>{t('pages.python-basics.code.row2')}</b></p>
                <p className="comment"><b><i>{t('pages.python-basics.code.row3')}</i></b></p>
                <p className="comment"><i>{t('pages.python-basics.code.row4')}</i></p>
                <p><i>{t('pages.python-basics.code.row5')}</i></p>
                <p className="comment"><i>{t('pages.python-basics.code.row6')}</i></p>
                <p>{t('pages.python-basics.code.row7')}</p>
                <p className="comment"><i>{t('pages.python-basics.code.row8')}</i></p>
                <p>{t('pages.python-basics.code.row9')}</p>
                <p>{t('pages.python-basics.code.row10')}</p>
                <p className="comment"><b><i>{t('pages.python-basics.code.row11')}</i></b></p>
                <p className="comment">{t('pages.python-basics.code.row12')}</p>
                <p>{t('pages.python-basics.code.row13')}</p>
                <p>{t('pages.python-basics.code.row14')}</p>
                <p>{t('pages.python-basics.code.row15')}</p>
                <p className="comment"><b><i>{t('pages.python-basics.code.row16')}</i></b></p>
                <p className="comment"><i>{t('pages.python-basics.code.row17')}</i></p>
                <p>{t('pages.python-basics.code.row18')}</p>
                <p className="comment"><i>{t('pages.python-basics.code.row19')}</i></p>
                <p>{t('pages.python-basics.code.row20')}</p>
                <p className="comment"><b><i>{t('pages.python-basics.code.row21')}</i></b></p>
                <p className="comment"><i>{t('pages.python-basics.code.row22')}</i></p>
                <p>{t('pages.python-basics.code.row23')}</p>
                <p className="comment"><i>{t('pages.python-basics.code.row24')}</i></p>
                <p>{t('pages.python-basics.code.row25')}</p>
                <p className="comment"><b><i>{t('pages.python-basics.code.row26')}</i></b></p>
                <p className="comment"><i>{t('pages.python-basics.code.row27')}</i></p>
                <p>{t('pages.python-basics.code.row28')}</p>
            </div>
                              
        </div> 
}

export default PythonBasics;