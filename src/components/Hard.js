import React,{useState} from 'react'
import './hard.css'

import img61 from '../Img6/img61.jpeg'
import img62 from '../Img6/img62.jpeg'
import img63 from '../Img6/img63.jpeg'
import img64 from '../Img6/img64.jpeg'
import img65 from '../Img6/img65.jpeg'
import img66 from '../Img6/img66.jpeg'

function Hard() {

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
        let flex1=document.getElementsByClassName("flex5")[0]
        
        if(data.split(",")[0] == e.target.className)
        {
        flex1.replaceChild(node, e.target);
        let flex2=document.getElementsByClassName("flex6")[0].childNodes.length
        console.log(flex2)
        if(flex2==0)
            setEmpty(true)
        } 
     }
    return (
        <div>
            <div draggable="true" onDrop={drop} onDragOver={allowDrop} className="flex5">
                       <div draggable="true" id="img61" className="img61"></div>
                        <div draggable="true" id="img62" className="img62"></div>
                        <div draggable="true" id="img63" className="img63"></div>
                        <div draggable="true" id="img64" className="img64"></div>
                        <div draggable="true" id="img65" className="img65"></div>
                        <div draggable="true" id="img66" className="img66"></div>
                    </div>
                    
                   {empty?<div class="comp">Congratulations, You have completed this Game</div>:<></>} 
               
                    

                    <div id="flex6" onDragStart={drag} onDragOver={allowDrop}  draggable="true" className="flex6">
                        <img id="img5" draggable="true" className="img65" src={img65} alt="img-5"></img>
                        <img id="img3" draggable="true" className="img63" src={img63} alt="img-3"></img>
                        <img id="img1" draggable="true" className="img61" src={img61} alt="img-1"></img>
                        <img id="img6" draggable="true" className="img66" src={img66} alt="img-6"></img>
                        <img id="img2" draggable="true" className="img62" src={img62} alt="img-2"></img>
                        <img id="img4" draggable="true" className="img64" src={img64} alt="img-4"></img>
                    </div>
        </div>
    )
}

export default Hard
