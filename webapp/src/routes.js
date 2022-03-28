import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import DataAnalysis from "./pages/data-analysis";
import Datasets from "./pages/datasets";
import BasicConcepts from "./pages/basic-concepts/basic-concepts";
import PerformanceAnalysis from "./pages/performance-analysis/performance-analysis";
import PythonBasics from "./pages/python-basics/python-basics";
import DefaultLayout from "./shared/layouts/default-layout";
import PerformanceLayout from "./shared/layouts/performace-layout/performance_layout";

const renderRoutes = () => {
    return <Routes>
        <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>} />
        <Route path="/datasets" element={<DefaultLayout><Datasets/></DefaultLayout>} />
        <Route path="/basic-concepts" element={<DefaultLayout><BasicConcepts/></DefaultLayout>} />
        {/* <Route path="/python-basics" element={<DefaultLayout><PythonBasics/></DefaultLayout>} /> */}
        <Route path="/data-analysis" element={<DefaultLayout><DataAnalysis/></DefaultLayout>} />
        <Route path="/performance-analysis" element={<PerformanceLayout><PerformanceAnalysis/></PerformanceLayout>} />
    </Routes>
}

export default renderRoutes;
