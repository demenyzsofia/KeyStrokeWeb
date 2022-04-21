import DataSidebar from "../../components/data-sidebar/data-sidebar";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import DatasetsSidebar from "../../components/sidebar";

const DatasetLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            <div className="dataSidebar">
                <DatasetsSidebar/>
                <DataSidebar/>
            </div>
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default DatasetLayout;
