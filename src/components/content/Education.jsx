import React from "react";
import Edudata from "./Edudata";

const Education = () => {
  const Eduinfo = (props) => {
    return (
      <>
        <div className="edinfo">
          <h6 className="name">{props.Name}</h6>
          <h6 className="year">{props.Year}</h6>
          <h6 className="marks">{props.Mark}</h6>
        </div>
        <div style={{ display: props.Display }} className="hr" />
      </>
    );
  };
  return (
    <>
      <div className="container coneducation">
          <div className="scrolly">
        <div className="education">
            {/* show hide */}
          <span className="shhd">education</span>
          <div className="outterEdu">
            {Edudata.map((val) => {
                return(
              <Eduinfo
                Name={val.Name}
                Year={val.year}
                Mark={val.Mark}
                Display={val.hr}
              />)
            })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Education;
