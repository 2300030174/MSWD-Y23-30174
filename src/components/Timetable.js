import React from 'react'

const Timetable = (props) => {
  return (
  <div id='timetable'>
    <title>Weekly Timetable</title>  
    <h1 class="sub">Weekly Timetable</h1>  
    <table id="timetable">  
        <thead>  
            <tr class="main">  
                <th>Day</th>  
                <th>Period 1</th>  
                <th>Period 2</th>  
                <th>Period 3</th>  
                <th>Period 4</th>  
                <th>Period 5</th>  
                <th>Period 6</th>  
                <th>Period 7</th>  
                <th>Period 8</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td class="main">Monday</td>  
                <td>{props.m1}</td>  
                <td>{props.m2} </td>  
                <td>{props.m3} </td>  
                <td> {props.m4} </td>  
                <td> {props.m5} </td>  
                <td> {props.m6} </td>  
                <td> {props.m7} </td>  
                <td> {props.m8} </td>  
            </tr>  
            <tr>  
                <td class="main">Tuesday </td>  
                <td>{props.t1}    </td>  
                <td>{props.t2}    </td>  
                <td>{props.t3}     </td>  
                <td>{props.t4}        </td>  
                <td>{props.t5}     </td>  
                <td>{props.t6}        </td>  
                <td>{props.t7}     </td>  
                <td>{props.t8}  </td>  
            </tr>  
            <tr>  
                <td class="main">Wednesday </td>  
                <td>{props.w1} </td>  
                <td>{props.w2} </td>  
                <td>{props.w3} </td>  
                <td>{props.w4} </td>  
                <td>{props.w5} </td>  
                <td>{props.w6} </td>  
                <td>{props.w7} </td>  
                <td>{props.w8} </td>  
            </tr>  
            <tr>  
                <td class="main">Thursday </td>  
                <td>{props.th1} </td>  
                <td>{props.th2} </td>  
                <td>{props.th3} </td>  
                <td>{props.th4} </td>  
                <td>{props.th5} </td>  
                <td>{props.th6} </td>  
                <td>{props.th7} </td>  
                <td>{props.th8} </td>  
            </tr>  
            <tr>  
                <td class="main">Friday</td>  
                <td>{props.f1} </td>  
                <td>{props.f2} </td>  
                <td>{props.f3} </td>  
                <td>{props.f4} </td>  
                <td>{props.f5} </td>  
                <td>{props.f6} </td>  
                <td>{props.f7} </td>  
                <td>{props.f8} </td>  
            </tr>  
        </tbody>  
    </table>  
  </div>
  )
}

export default Timetable
