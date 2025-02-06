import {useEffect, React} from 'react'

function Launch() {
  
  // useEffect(()=>{
  //   document.body.style.backgroundImage = "url('/bg-jobbit.png')";
  //   document.body.style.backgroundRepeat = "no-repeat";
  //   document.body.style.backgroundSize = "cover";
  //   document.body.style.backgroundPosition = "center";
  // },[])

  return (
    <>
      <img className="full-page animated-vid" src="./bg-jobbit.png" alt="JOBBIT IS HERE !!!"/>
    </>
  )
}

export default Launch
