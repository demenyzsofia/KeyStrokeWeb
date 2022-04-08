import logo from "../../../images/logo.png"
import hungarian from "../../../images/hungarian.png"
import unitedKingdom from "../../../images/united-kingdom.png"
import romanian from "../../../images/romanian.png"
import "./header.css"

const Header = ({title}) => {
    return <div className="header">
        <img className="logo" src={logo} />
        <p><i>{title || "Anomália detektálás jelszó gépelés esetében"}</i></p>
        <div className="flags">
            <img src={hungarian} />
            <img src={unitedKingdom} />
            <img src={romanian} />
        </div>
    </div>
}


export default Header;