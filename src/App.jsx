import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/content/Contact";
import Project from "./components/content/Project";
import Skill from "./components/content/Skill";
import Education from "./components/content/Education";
import Home from "./components/content/Home";
import LeftNavBar from "./components/nav/Leftnav";
import Footer from "./components/footer/Footer";
// css
import "./components/footer/footer.css";
import "./components/content/contact.css";
import "./components/content/home.css";
import "./components/content/skill.css";
import "./components/content/education.css";
import "./components/content/project.css";
// img

const App = () => {
  return (
    <>
      <LeftNavBar />
      <Switch>
        <Route exact path="/vtech-portfolio/" component={Home} />
        <Route exact path="/vtech-portfolio/project" component={Project} />
        <Route exact path="/vtech-portfolio/contact" component={Contact} />
        <Route exact path="/vtech-portfolio/education" component={Education} />
        <Route exact path="/vtech-portfolio/skill" component={Skill} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
