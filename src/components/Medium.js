import React, {useState} from 'react'
import './medium.css'
import img41 from '../Img4/img41.jpeg'
import img42 from '../Img4/img42.jpeg'
import img43 from '../Img4/img43.jpeg'
import img44 from '../Img4/img44.jpeg'


function Medium() {

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
        let flex1=document.getElementsByClassName("flex3")[0]
        
        if(data.split(",")[0] == e.target.className)
        {
        flex1.replaceChild(node, e.target);
        let flex2=document.getElementsByClassName("flex4")[0].childNodes.length
        console.log(flex2)
        if(flex2==0)
            setEmpty(true)
        } 
     }
    return (
        <div>
           <div draggable="true" onDrop={drop} onDragOver={allowDrop} className="flex3">
                       <div draggable="true" id="img41" className="img41"></div>
                        <div draggable="true" id="img42" className="img42"></div>
                        <div draggable="true" id="img43" className="img43"></div>
                        <div draggable="true" id="img44" className="img44"></div>
                    </div>
                    
                   {empty?<div className="cong">Congratulations, You have completed this puzzle. Go to next level</div>:<></>} 
               
                    

                    <div id="flex4" onDragStart={drag} onDragOver={allowDrop}  draggable="true" className="flex4">
                        <img id="img3" draggable="true" className="img43" src={img43} alt="img-3"></img>
                        <img id="img1" draggable="true" className="img41" src={img41} alt="img-1"></img>
                        <img id="img4" draggable="true" className="img44" src={img44} alt="img-4"></img>
                        <img id="img2" draggable="true" className="img42" src={img42} alt="img-2"></img>
                    </div>
        </div>
    )
}

export default Medium
