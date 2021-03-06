import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";

const DefaultLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default DefaultLayout;
