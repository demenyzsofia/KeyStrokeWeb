import { useTranslation } from "react-i18next";
import "../../translations/i18n";
import './datasets.css'

const Datasets = () => {
    const { t } = useTranslation();
    return <div class="content">
            <h2 id="data">{t('pages.datasets.title')}</h2>
            <table className='table'>
                <tr>
                    <td>   
                        <a href="https://github.com/margitantal68/sapipin" >Sapipin</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.ms.sapientia.ro/~manyi/mobikey.html" >Easy</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.ms.sapientia.ro/~manyi/keystroke.html" >Keystroke2014</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.ms.sapientia.ro/~manyi/mobikey.html" >Logicalstrong</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.ms.sapientia.ro/~manyi/mobikey.html" >Strong</a>
                    </td>
                </tr>
            </table>
        </div> 
}
export default Datasets;