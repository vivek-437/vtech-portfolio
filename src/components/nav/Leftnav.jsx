import React,{useState}from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar=()=>{
    const [expColl, setExpColl] = useState(false);
    const handlebox=()=>{
      setExpColl(false);
    }
    // useEffect(()=>{
    //     if(window.innerWidth<=3000 && window.innerWidth>600){
    //         setExpColl('block');
    //     }
    //     else if(window.innerWidth<600){
    //         setExpColl('none')
    //     }
    //   },[window.innerWidth])
    //     const expan=()=>{
    //       if(expColl==='none'){
    //         setExpColl('block');
    //       } else{
    //           setExpColl('none')
    //       }
    //       }
    return(<>
       
         <div className="leftNavBr">
         <div className="collapBtn"onClick={()=>{
           setExpColl(!expColl)
         }} >
          <span>☰</span>
          </div>

        <div className={expColl?"ItemBlockt":"ItemBlock"}>
             <ul >
          <NavLink exact to='/vtech-portfolio/'  className="hover"  activeClassName="activeLink" onClick={handlebox}><i className="fas fa-home"><span  className="dis">home</span></i></NavLink>

        <NavLink exact to='/vtech-portfolio/contact' className="hover"  activeClassName="activeLink" onClick={handlebox} ><i className="fas fa-address-card "> <span className="dis">contact</span></i></NavLink>

        <NavLink exact to='/vtech-portfolio/education'className="hover"  activeClassName="activeLink" onClick={handlebox}><i className="fas fa-user-graduate "> <span className="dis">education</span></i></NavLink>

        <NavLink exact to='/vtech-portfolio/skill'className="hover" activeClassName="activeLink"  onClick={handlebox}><i className="fas fa-book-reader "> <span className="dis">skill</span></i></NavLink>

        <NavLink exact to='/vtech-portfolio/project' className="hover" activeClassName="activeLink" onClick={handlebox}><i className="fas fa-project-diagram "><span className="dis">project</span></i></NavLink>
        </ul>
        </div>
        </div>
  
        </>
    )
};
export default LeftNavBar;
