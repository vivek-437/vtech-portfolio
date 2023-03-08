import React from "react";
import Prjdata from "../json/prjdata";
const project = () => {
  
  const Prjdataruner = (props) => {
    return (
      <>
        <div className="pjdata">
        <div className="prjimg">
          <a href={props.Title_link} target="_blank" rel="noopener noreferrer">
          <img src={props.Imgsrc} alt="Not Found" srcSet="" />
          </a>
        </div>
        <div className="prjexp">
          <h6>{props.Title}</h6>
          <p className="size">{props.Data}</p>
        </div>

        <a href={props.Href} className="get_source">get source code</a>
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
                        Title_link={val.title_link}
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
