import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import ProtectedRoute from './contexts/ProtectedRoute';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import { useState } from 'react';
import Button from './components/Button'; // Assume you have a Button component to handle button rendering

// Components for each case
import Student from './components/Student';
import Faculty from './components/Faculty';
import Course from './components/Course';
import Timetable from './components/Timetable';

const buttons = [
  "Student Details", "Faculty", "Course", "Timetable"
];

const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return (
        <Student
          id1="2300030001" name1="Anandh" branch1="CSE"
          id2="2300030002" name2="Surya" branch2="ECE"
          id3="2300030003" name3="Satya" branch3="AI & DS"
          id4="2300030004" name4="Aditya" branch4="CSE"
          id5="2300030005" name5="Suresh" branch5="AI & DS"
        />
      );
    case 1:
      return (
        <Faculty
          id1="32322" name1="Mark" designation1="Lecturer" dept1="CSE"
          id2="32323" name2="Larry" designation2="HOD" dept2="ECE"
          id3="32324" name3="Jacob" designation3="Lecturer" dept3="AI & DS"
        />
      );
    case 2:
      return <Course name1="MSWD" tname1="Mern Stack Web Development" ltps1="0-0-4-2" c1="4" />;
    case 3:
      return (
        <Timetable
          m1="English" m2="Maths" m3="Social" m4="Physics" m5="Biology" m6="Chemistry" m7="Telugu" m8="Hindi"
          t1="English" t2="Maths" t3="Social" t4="Physics" t5="Biology" t6="Chemistry" t7="Telugu" t8="Hindi"
          w1="English" w2="Maths" w3="Social" w4="Physics" w5="Biology" w6="Chemistry" w7="Telugu" w8="Hindi"
          th1="English" th2="Maths" th3="Social" th4="Physics" th5="Biology" th6="Chemistry" th7="Telugu" th8="Hindi"
          f1="English" f2="Maths" f3="Social" f4="Physics" f5="Biology" f6="Chemistry" f7="Telugu" f8="Hindi"
        />
      );
    default:
      return null;
  }
};

function App() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <AppProvider>
      <Router>
        <div className="app-container bg">
          <Button
            className="button"
            buttons={buttons}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
          <RenderComponent index={isSelected} />
        </div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
