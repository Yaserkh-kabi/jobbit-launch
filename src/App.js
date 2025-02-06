import './App.css';
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const videoRef = useRef(null);
  const [launched, setLaunched] = useState(false);

  const playVid = () => {
    videoRef.current.play();
  }

  useEffect(()=>{
    videoRef.current.currentTime = 1;
  },[videoRef])

  return (
    <>
      {!launched && <video
        style={{cursor:"pointer"}}
        className='full-page'
        onEnded={()=>setLaunched(true)}
        ref={videoRef}
        onClick={playVid}
      >
        <source src={process.env.PUBLIC_URL + "/vid.mp4"} type="video/mp4" />
      </video>}
      {launched && <img className="full-page animated-vid" src={process.env.PUBLIC_URL + "/bg-jobbit3.JPG"} alt="JOBBIT IS HERE !!!"/>}
    </>
  );
}
export default App;