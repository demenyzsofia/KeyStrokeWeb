import DataSidebar from "../../components/data-sidebar/data-sidebar";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import DatasetsSidebar from "../../components/sidebar/sidebar";


const DataLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            <div className="data-sidebar">
                <DatasetsSidebar></DatasetsSidebar>
                <DataSidebar></DataSidebar>
            </div>
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default DataLayout;