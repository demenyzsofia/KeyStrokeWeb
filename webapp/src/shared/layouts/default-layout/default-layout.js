import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import DatasetsSidebar from "../../components/sidebar";

const DefaultLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            <DatasetsSidebar/>
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default DefaultLayout;
