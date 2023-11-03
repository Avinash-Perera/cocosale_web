import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import AboutTeam from './Components/AboutTeam'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Domain from './Components/Domain'
import Milestones from './Components/Milestones'
import ProjectResources from './Components/ProjectResources'
import React from "react";
function App() {
 return (
     <div className="App">
         <div id="app-container">
              <Home />
              <Domain/>
              <Services />
              <Milestones/>
             <br/>
              <ProjectResources />
              <AboutTeam />
              <Contact />
              <Footer />
         </div>
     </div>
 );
}

export default App
