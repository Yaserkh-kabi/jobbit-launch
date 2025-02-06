import {useEffect, React} from 'react'

function Launch() {
  
  useEffect(()=>{
    document.body.style.backgroundColor = "black";
  },[])

  return (
    <>
      <img className="full-page animated-vid" src="./bg-jobbit.png" alt="JOBBIT IS HERE !!!"/>
    </>
  )
}

export default Launch
