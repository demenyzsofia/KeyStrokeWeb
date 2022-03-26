import Header from "../header";
import "./footer.css"

const Footer = (parameter) => {
    return <div class="footer">
            <p> <i>© 2022 - Demény Zsófia - Diplomadolgozat</i></p>
            {(parameter.parameter)}
        </div>
}


export default Footer;