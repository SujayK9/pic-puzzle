import React, {useState,useEffect} from 'react';
import './App.css';
import './components/easy.css'
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';
function App() {


  useEffect(() => {
    const script = document.createElement("script");

    script.src = "scripts/DragDropTouch.js";
    script.async = true;

    document.body.appendChild(script);
  },[]);

  const [easy,setEasy]=useState(false);
  const [medium,setMedium]=useState(false);
  const [hard,setHard]=useState(false);
  const [start,setStart]=useState(false)

  function handleLevels(e){


    document.querySelectorAll(".levels").forEach((e) => e.style.border = "none")

    // const bs=document.getElementsByClassName("levels")
    
    // bs.forEach((b)=>b.style.border="none")
    e.target.style.border="3px solid rgb(247, 82, 16)"
    
    setEasy(false);
    setMedium(false)
    setHard(false)
    setStart(false)

  }

  return (
 
    <div className="App">
      <h1>Welcome to Pic-Puzzle Game</h1>
      <h2>Choose Level and start</h2>
<div>
      <button id="easyButton" className="levels" onClick={(e)=>{handleLevels(e);
    setEasy(true)}}>Easy</button>

<button id="mediumButton" className="levels" onClick={(e)=>
{handleLevels(e);
  
    setMedium(true)}}>Medium</button>

<button id="hardButton" className="levels" onClick={(e)=>{handleLevels(e);
    setHard(true)}}>Hard</button>
</div>
{/* {console.log(easy,medium,hard)} */}

<button className="start" onClick={()=>setStart(true)}>Start</button>

{start?(
  <>
  {easy? (<Easy />):(<></>)}
  
  {medium?(<Medium medium={medium}/>):(<></>)}
  {hard?(<Hard hard={hard}/>):(<></>)}
  </>
  
):(<></>)}


    </div>

  );
}

export default App;
