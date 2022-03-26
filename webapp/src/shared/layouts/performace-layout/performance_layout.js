import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import DetectorSidebar from "../../components/detector-sidebar"
import MainContent from "../../components/sidebar/sidebar";


const PerformanceLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            <div className="performance-sidebar">
                <MainContent></MainContent>
                <DetectorSidebar></DetectorSidebar>
            </div>
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default PerformanceLayout;
