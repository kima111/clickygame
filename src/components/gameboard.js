import React, { Component } from 'react'
import "./index.scss";
import Card from './Card';
import Cards from "./cards.json";


import "./index.scss";



var alreadyPicked = [];
var status = "Not yet started"
var counting =0;
var highScore = 0;
const styles = {
  
    heading:{
   
        color: "white",
        textDecoration: "none"
        
    },
    tagline:{
  
        marginLeft: "5px",
        marginTop: "-10px"
    },
    button:{
        marginLeft: "-8px"
     
    }, 
    button2:{
        marginLeft: "5px"
    },
    center: {

        borderStyle: "solid",
        borderWidth: "5px",
        borderRadius: "5px",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.7)",
        height:"100%",
       
    },
    fontSize: {
     
        display: "inline-block",
        fontSize: "25px"
   
    }

}

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


class GameBoard extends Component{

    state={
        count: 0,
        name: "",

    }

    handleIncrement = event => {
        event.preventDefault();
        var {value } = event.target;

   
        for(let i=0;i<alreadyPicked.length;i++){
        //check for value in the array if found then reset status
        if(value===alreadyPicked[i]){
            console.log("worked")
            alreadyPicked = []
            status = "lose"
            counting = 0
            this.setState({
                count: 0
            })

        } 
        }
        if (status !== "lose"){
            alreadyPicked.push(value)
            status = "winning"
           
            if(highScore === counting){
            highScore ++
            }
            counting ++
            this.setState({
          
                count: this.state.count + 1,
          
              });
         
        }else{
            status="Start again"
        }
       
      console.log(alreadyPicked)
    }

 
    render(){

        const shuffledCards = shuffleArray(Cards)
        return (

            <div>
                   
           <h1 style={styles.fontSize}>Clicky Game </h1><h2 style={styles.fontSize}> &nbsp;| Status: {status}</h2><h2 style={styles.fontSize}> &nbsp;| Points: {this.state.count}</h2><h2 style={styles.fontSize}> &nbsp;| High Score: {highScore}</h2>
        
       
   
                <div className="fadeUp" style={styles.center}>
                <div className="row">
                {shuffledCards.map(Cards => (
                    <div className={Cards.format}>
                    <Card
                    value={Cards.title}
               
                    image={Cards.src}
                    title={Cards.title}
                    description={Cards.description}
                    projectURL={Cards.projectURL}
                    githuborheroku={Cards.githuborheroku}
                    handleIncrement={this.handleIncrement}
                    />
                    </div>
                ))}
                </div>
                </div>
              
               
            </div>
           
        )
                }
    }
export default GameBoard;