import "../detector-sidebar.css";

export const accordionData = [
    {
      groupName:  <p className="groups">Lineáris modellek</p>,
      detectors: <ul className="detectors">
            <li><a href="">PCA</a></li>
            <li><a href="">OCSVM</a></li>
      </ul>
          
    },
    {
        groupName: <p className="groups">Közelségalapú modellek</p>,
        detectors: <ul  className="detectors">
            <li><a href="">LOF</a></li>
            <li><a href="">kNN</a></li>
            <li><a href="">HBOS</a></li>
        </ul>
    },
    {
        groupName: <p className="groups">Ensemble típusú modellek</p>,
        detectors: <ul  className="detectors">
            <li><a href="">IForest</a></li>
            <li><a href="">FB</a></li>
        </ul>
    },
    {
        groupName: <p className="groups">Valószínűségi modellek</p>,
        detectors: <ul  className="detectors">
            <li><a href="">COPOD</a></li>
            <li><a href="">ABOD</a></li>
        </ul>
    }
  ];