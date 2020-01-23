import React from 'react';
import "./index.scss";


const styles={

    transparentCard:{
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor: "white",
        width: "170px",
      
        margin: "15px",
        display: "inline-block"
    }
        
}
function Card(props) {

        return (
            <div>
   
                   <input type="image" picked="not_picked" style={styles.transparentCard} src={props.image} value={props.title}  alt="placeholder" onMouseUp={props.handleIncrement} className="card card-img-top" />
         
            </div>
            )
            }
        
export default Card;