import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import renderRoutes from './routes';
import { createGlobalState } from 'react-hooks-global-state';
import './styles/style.css';
import { DATASET } from './shared/constants/datasets';
import { DIAGRAMTYPE } from './shared/constants/diagram-types';
import { DETECTORCATEGORY } from './shared/constants/detector-groups';
import { DETECTOR } from './shared/constants/detectors';


const initialState = {
  diagramType: DIAGRAMTYPE.HIST,
  dataset : DATASET.SAPIPIN,
  detectorGroup : DETECTORCATEGORY.LINEAR,
  detector: DETECTOR.PCA,
  color: "black"
};
const { useGlobalState } = createGlobalState(initialState);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {renderRoutes()}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {useGlobalState};
