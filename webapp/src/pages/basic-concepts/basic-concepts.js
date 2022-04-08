import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import './basic-concepts.css'

const BasicConcepts = () => {
    const { t } = useTranslation();
    return <div className="content">
            <h2 id="basic">{t('pages.basic-concepts.title')}</h2>
            <p className='subtitle'><b>{t('pages.basic-concepts.subtitle1')}</b></p>
            <ul className='concepts'>
                <li>{t('pages.basic-concepts.listing1.1')}</li>
                <li>{t('pages.basic-concepts.listing1.2')}</li>
                <li>{t('pages.basic-concepts.listing1.3')}</li>
                <li>{t('pages.basic-concepts.listing1.4')}</li>
                <li>{t('pages.basic-concepts.listing1.5')}</li>
                <li>{t('pages.basic-concepts.listing1.6')}</li>
                <li>{t('pages.basic-concepts.listing1.7')}</li>
                <li id="hist-text">A hisztogram metrikusan skálázott tulajdonságok grafikus ábrázolása</li>
            </ul>
            <p className='subtitle'><b>{t('pages.basic-concepts.subtitle2')}</b></p>
            <ul className='notation'>
                <li>{t('pages.basic-concepts.listing2.1')}</li>
                <li>{t('pages.basic-concepts.listing2.2')}</li>
                <li>{t('pages.basic-concepts.listing2.3')}</li>
                <li>{t('pages.basic-concepts.listing2.4')}</li>
                <li>{t('pages.basic-concepts.listing2.5')}</li>
                <li>{t('pages.basic-concepts.listing2.6')}</li>
                <li>{t('pages.basic-concepts.listing2.7')}</li>
                <li>{t('pages.basic-concepts.listing2.8')}</li>
                <li>{t('pages.basic-concepts.listing2.9')}</li>
            </ul>
        
        </div>
}
export default BasicConcepts;