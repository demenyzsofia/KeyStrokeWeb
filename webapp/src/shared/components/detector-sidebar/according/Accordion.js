import { accordionData } from "./content";
import React, { useState } from 'react';


const Accordion = ({item, index }) => {
  const [isActive, setIsActive] = useState(false);
  const toggle = index  =>{
    if(isActive === index){
      return setIsActive(null)
    } 
    setIsActive(index)
  }

  return (
       <div className="accordion">
          {accordionData.map((item, index) => (
            <>
              <div className="accordion-title" onClick={() => toggle(index)} key={index}>
                        <div>{item.groupName}</div>
              </div>
              {
                isActive === index ? (<div className="accordion-content">{item.detectors}</div>) : null
              }
            </>
          ))}</div>
  );
};

export default Accordion;
