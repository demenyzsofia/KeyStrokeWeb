import logo from "../../../images/logo.png"
import "./header.css"

const Header = ({title}) => {
    return <div className="header">
        <img className="logo" src={logo} />
        <p><i>{title || "Anomália detektálás jelszó gépelés esetében"}</i></p>
    </div>
}


export default Header;