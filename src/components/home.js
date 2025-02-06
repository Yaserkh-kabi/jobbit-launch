import React, { useEffect, useRef } from 'react'

function Home() {

  const videoRef = useRef(null);

  const playVid = () => {
    videoRef.current.play();
  }

  useEffect(()=>{
    videoRef.current.currentTime = 1;
  },[videoRef])
  
  // useEffect(()=>{
  //   document.body.style.backgroundColor = "#000055";
  // },[])

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          onClick={()=>window.location.href="/launch"}
          src="/btn3.gif"
          alt='Jobbit button'
          style={{ cursor: "pointer", width:"20rem", height:"20rem", borderRadius: "80%", objectFit: "cover" }}
        />
      </div> */}
      <video
        style={{cursor:"pointer"}}
        className='full-page'
        onEnded={()=>window.location.href = "launch"}
        ref={videoRef}
        onClick={playVid}
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
    </>
  )
}

export default Home
