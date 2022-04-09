import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import DataAnalysis from "./pages/data-analysis";
import Datasets from "./pages/datasets";
import BasicConcepts from "./pages/basic-concepts/basic-concepts";
import DefaultLayout from "./shared/layouts/default-layout";
import DataLayout from "./shared/layouts/data-layout/data-layout";
import PerformanceDetectorGroupLayout from "./shared/layouts/performace-detectorGroup-layout/performance-detectorGroup-layout";
import PerformanceDetectorLayout from "./shared/layouts/performance-detector-layout/performance-detector-layout";
import PerformanceAnalysisDetectorGroup from "./pages/performance-analysis-detectorGroup/performance-analysis-detectorGroup";
import PerformanceAnalysisDetector from "./pages/performance-analysis-detector/performance-analysis-detector";

const renderRoutes = () => {
    return <Routes>
        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>} />
        <Route path="/datasets" element={<DefaultLayout><Datasets/></DefaultLayout>} />
        <Route path="/basic-concepts" element={<DefaultLayout><BasicConcepts/></DefaultLayout>} />
        {/* <Route path="/python-basics" element={<DefaultLayout><PythonBasics/></DefaultLayout>} /> */}
        <Route path="/data-analysis" element={<DataLayout><DataAnalysis/></DataLayout>} />
        <Route path="/performance-analysis-detectorGroup" element={<PerformanceDetectorGroupLayout><PerformanceAnalysisDetectorGroup/></PerformanceDetectorGroupLayout>} />
        <Route path="/performance-analysis-detector" element={<PerformanceDetectorLayout><PerformanceAnalysisDetector/></PerformanceDetectorLayout>} />
    </Routes>
}

export default renderRoutes;
