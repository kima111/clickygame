import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
  } from "react-router-dom";
import background from "../images/background.jpg";
import GameBoard from "../components/gameboard";
import NoMatch from "./nomatch";
const styles = {  
background: {
    backgroundImage: `url(${background})`,
    color: "white",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
},
h1:{
    fontWeight: "500",
    color: "white",
    textShadow: " 0 2px black"
}
}
export default function main() {

    
    return (
        <div>
            <div style={styles.background}>
           <div className="container">
           <Router>
         
         
              
               <Switch>
               <Route exact path="/" component={this}/>
{/*            <Route component={NoMatch} /> */}
               </Switch>
           </Router>
           <GameBoard/>
           </div>
        </div>
        </div>
    )
}

