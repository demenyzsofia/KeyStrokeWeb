import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import "./footer.css"

const Footer = (parameter) => {
    const { t } = useTranslation();

    return <div class="footer">
            <p><i>{t("shared.footer.title")}</i></p>
            {(parameter.parameter)}
        </div>
}


export default Footer;