import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Sidebar from "../../components/sidebar";
import DetectorGroupSidebar from "../../components/detector-group-sidebar/detector-group-sidebar";


const PerformanceDetectorGroupLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            <div className="performance-sidebar">
                <Sidebar></Sidebar>
                <DetectorGroupSidebar></DetectorGroupSidebar>
            </div>
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default PerformanceDetectorGroupLayout;
