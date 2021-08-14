import React, {useState, useEffect} from 'react'
import './easy.css'
import img21 from '../Img2/img21.jpeg'
import img22 from '../Img2/img22.jpeg'

function Easy() {

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "scripts/DragDropTouch.js";
        script.async = true;
    
        document.body.appendChild(script);
      },[]);

const [empty,setEmpty]=useState(false)

function drag(e){
    e.dataTransfer.setData("text", [e.target.className,e.target.id]);
}


function allowDrop(e) {
    e.preventDefault();
  }
  
  function drop(e) {
    
    let data = e.dataTransfer.getData("text");
    let node=document.getElementById(data.split(",")[1])
    let flex1=document.getElementsByClassName("flex1")[0]
    
   
  
    if(data.split(",")[0] == e.target.className)
    {
    flex1.replaceChild(node, e.target);
    let flex2=document.getElementsByClassName("flex2")[0].childNodes.length
    console.log(flex2)
    if(flex2==0){
        setEmpty(true)
    }
  }  }


    return (
        <div>
       <div draggable="true" onDrop={drop} onDragOver={allowDrop} className="flex1">
                        <div draggable="true" id="img11" className="img11"></div>
                        <div draggable="true" id="img12" className="img12"></div>
                    </div>
                    
                   {empty?<div>Congratulations, You have completed this puzzle. Go to next level</div>:<></>} 
               
                    

                    <div id="flex2" onDragStart={drag} onDragOver={allowDrop}  draggable="true" className="flex2">
                        <img id="img1" draggable="true" className="img12" src={img22} alt="img-1"></img>

                        <img id="img2" draggable="true" className="img11" src={img21} alt="img-2"></img>
                    </div>
        </div>
        
    )

   

}
export default Easy
