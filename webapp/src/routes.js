import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import DataAnalysis from "./pages/data-analysis";
import Datasets from "./pages/datasets";
import BasicConcepts from "./pages/basic-concepts/basic-concepts";
import PerformanceDetectorGroupLayout from "./shared/layouts/performace-detectorGroup-layout/performance-detectorGroup-layout";
import PerformanceDetectorLayout from "./shared/layouts/performance-detector-layout/performance-detector-layout";
import PerformanceAnalysisDetectorGroup from "./pages/performance-analysis-detectorGroup/performance-analysis-detectorGroup";
import PerformanceAnalysisDetector from "./pages/performance-analysis-detector/performance-analysis-detector";
import DatasetLayout from "./shared/layouts/datase-layout/dataset-layout";
import DefaultLayout from "./shared/layouts/default-layout/default-layout";

const renderRoutes = () => {
    return <Routes>
        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>} />
        <Route path="/datasets" element={<DefaultLayout><Datasets/></DefaultLayout>} />
        <Route path="/basic-concepts" element={<DefaultLayout><BasicConcepts/></DefaultLayout>} />
        <Route path="/data-analysis" element={<DatasetLayout><DataAnalysis/></DatasetLayout>} />
        <Route path="/performance-analysis-detectorGroup" element={<PerformanceDetectorGroupLayout><PerformanceAnalysisDetectorGroup/></PerformanceDetectorGroupLayout>} />
        <Route path="/performance-analysis-detector" element={<PerformanceDetectorLayout><PerformanceAnalysisDetector/></PerformanceDetectorLayout>} />
    </Routes>
}

export default renderRoutes;
