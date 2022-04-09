import "../detector-sidebar.css";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { DETECTORGROUP } from "../../../constants/detector-groups";

export const accordionData = [
    {
      groupName:  <p className="groups">{DETECTORGROUP.LINEAR}<ArrowDropDownIcon/></p>,
      detectors: <ul className="detectors">
            <li><a href="">PCA</a></li>
            <li><a href="">OCSVM</a></li>
      </ul>
          
    },
    {
        groupName: <p className="groups">{DETECTORGROUP.PROXIMITY}<ArrowDropDownIcon/></p>,
        detectors: <ul  className="detectors">
            <li><a href="">LOF</a></li>
            <li><a href="">kNN</a></li>
            <li><a href="">HBOS</a></li>
        </ul>
    },
    {
        groupName: <p className="groups">{DETECTORGROUP.ENSEMBLE}<ArrowDropDownIcon/></p>,
        detectors: <ul  className="detectors">
            <li><a href="">IForest</a></li>
            <li><a href="">FB</a></li>
        </ul>
    },
    {
        groupName: <p className="groups">{DETECTORGROUP.PROBABILISTIC}<ArrowDropDownIcon/></p>,
        detectors: <ul  className="detectors">
            <li><a href="">COPOD</a></li>
            <li><a href="">ABOD</a></li>
        </ul>
    }
  ];