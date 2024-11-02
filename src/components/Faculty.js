
import React from 'react'

const Faculty = (props) => {
  return (
    <div id='faculty'>
      <table class="table">
  <thead>
    <tr class="main">
      <th scope='col'> S.NO </th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DESIGNATION</th>
      <th scope="col">DEPARTMENT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> {props.id1} </td>
      <td>{props.name1}</td>
      <td>{props.designation1}</td>
      <td>{props.dept1}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td> {props.id2} </td>
      <td>{props.name2}</td>
      <td>{props.designation2}</td>
      <td>{props.dept2}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td> {props.id3} </td>
      <td> {props.name3} </td>
        <td> {props.designation3} </td>
      <td> {props.dept3} </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Faculty
