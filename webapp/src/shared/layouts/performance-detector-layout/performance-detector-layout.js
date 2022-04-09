import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import Menu from "../../components/menu";
import DetectorSidebar from "../../components/detector-sidebar"


const PerformanceDetectorLayout = (params) => {  
    return <div className="container">
        <Header/>
        <Menu/>
        <div className="main">
            <div className="performance-sidebar">
                <DetectorSidebar></DetectorSidebar>
            </div>
            {params.children}
        </div>
        <Footer/>
    </div>
}

export default PerformanceDetectorLayout;