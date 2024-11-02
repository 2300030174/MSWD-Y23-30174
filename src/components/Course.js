import React from 'react'

const Course = (props) => {
  return (
    <div id='course'>
      <div class="card" width="18rem;">
  <img src="https://tse2.mm.bing.net/th?id=OIP.PMBiSa-JBIhSrPqckRRxyQHaEK&pid=Api&P=0&h=220" class="card-img-top"/>
  <div class="card-body d-flex flex-column justify-content-center">
    <h5 class="card-title">{props.name1}</h5>
    <p class="card-text">{props.tname1}</p>
    <p class="card-text">{props.ltps1}</p>
    <p class="card-text"> {props.c1} </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" width="18rem;">
  <img src="https://thumbs.dreamstime.com/z/mathematical-programming-concept-d-illustration-computer-keyboard-script-two-adjacent-pale-blue-buttons-73988581.jpg" class="card-img-top"/>
  <div class="card-body d-flex flex-column justify-content-center">
    <h5 class="card-title">MP</h5>
    <p class="card-text">Mathematical Programing</p>
    <p class="card-text"> 2-2-0-0 </p>
    <p class="card-text"> 4 </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" width="18rem;">
  <img src="https://www.scaler.com/topics/media/object-oriented-programming-concepts.jpg" class="card-img-top"/>
  <div class="card-body d-flex flex-column justify-content-center">
    <h5 class="card-title">AOOP</h5>
    <p class="card-text">Advanced Object Oriented Programing</p>
    <p class="card-text"> 2-0-2-2 </p>
    <p class="card-text"> 6 </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default Course
