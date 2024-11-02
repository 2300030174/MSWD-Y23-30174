import React from 'react'
import AttendenceButton from './AttendenceButton.js'
const Student = (props) => {
  return (
    
    <div>
        <h1 class="h1"> Student Details </h1>
        <div>
      <ul class="list-group col-xl-3">
        <li class="list-group-item">{props.id1}</li>
        <li class="list-group-item">{props.name1}</li>
        <li class="list-group-item">{props.branch1}</li>
        <li><AttendenceButton/></li>
      </ul>
      
      <ul class="list-group col-xl-3">
        <li class="list-group-item">{props.id2}</li>
        <li class="list-group-item">{props.name2}</li>
        <li class="list-group-item">{props.branch2}</li>
        <li><AttendenceButton/></li>
      </ul>
      <ul class="list-group col-xl-3">
        <li class="list-group-item">{props.id3}</li>
        <li class="list-group-item">{props.name3}</li>
        <li class="list-group-item">{props.branch3}</li>
        <li><AttendenceButton/></li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">{props.id4}</li>
        <li class="list-group-item">{props.name4}</li>
        <li class="list-group-item">{props.branch4}</li>
        <li><AttendenceButton/></li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">{props.id5}</li>
        <li class="list-group-item">{props.name5}</li>
        <li class="list-group-item">{props.branch5}</li>
        <li><AttendenceButton/></li>
      </ul>
      </div>
    </div>
  )
}

export default Student