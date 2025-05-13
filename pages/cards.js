import React from 'react'
import Image from 'next/image'

const cards = () => {
  return (
    <>
<div style={{display: "flex", flexDirection: "column", alignItems:"center", textAlign:"center", backgroundColor:"lightbue"}}>
    <div className="card" style={{width: "80%", marginTop: "2rem"}}>
    <div className="card-body">
      <h5 className="card-title">NoteTaker</h5>
      <p className="card-text">Project Description</p>
    </div>
    <img src="/projects/notetaker.png" className="card-img-bottom align-self-center" alt="Project Image" style={{width: "80%"}}/>
  </div>

  <div className="card bg-dark text-dark" style={{width: "80%",marginTop: "2rem"}}>
  <img className="card-img" src="/projects/notetaker.png" alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
</div>
</>
  )
}

export default cards