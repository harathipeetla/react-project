import React, { useState} from "react";
import './Assignment.css';
function Assignment(){
    const [numbers,setNumbers]=useState(1);
    const increment =()=>{
        setNumbers(numbers+1)
    }
    const [colour,setColor]=useState("yellow");
    const changecolor=()=>{
        if(useState===true){
            setColor("yellow")
        }else{
            setColor("lightgreen")
        }
    }
        const [state,setstate]=useState("red");
        const handleClick=()=>{
           if(state===true){
            setstate("red")
           }else{
            setstate("aqua")
           }
    }
return(
    <div>
        <center>
        <div className="square">
            <div className="circle"  style={{backgroundColor:colour}}> <span>{numbers}</span><br></br>
            <a href="#button">Click to increse counter</a></div>
        </div>
        <button className="button" onClick={() => {increment();changecolor()} } >Change color</button>
        </center>
        <div className="secondBtn">
     <center>   <button  onClick={handleClick} className='btn' style={{backgroundColor:state}}>Click Me</button></center>
        </div>
    </div>
   );
}
export default  Assignment;