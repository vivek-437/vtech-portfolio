import React from "react";
import Prjdata from "./prjdata";
const project = () => {
  
  const Prjdataruner = (props) => {
    return (
      <>
        <div className="pjdata">
        <div className="prjimg">
          <img src={props.Imgsrc} alt="Not Found" srcSet="" />
        </div>
        <div className="prjexp">
          <h6>{props.Title}</h6>
          <p className="size">{props.Data}</p>
        </div>

        <a href={props.Href}>get source code</a>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container conproject">
        <div className="scrolly">
          <div className="project">
            {/* show hide */}
            <span className="shhd">project</span>
            <div className="projectinfo">
              <h5>check out some of my project :)</h5>
              <div className="flexer">
                {/* project data */}
            
                  {Prjdata.map((val) => {
                    return (
                      <Prjdataruner
                        Imgsrc={val.imsrc}
                        Title={val.title}
                        Data={val.data}
                        Href={val.link}
                      />
                    );
                  })}
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
