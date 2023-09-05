import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] =  useState('light');
  const [alert, setAlert] =  useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Manupulator - Dark Mode";
      //changes Title in time Interval
      // setInterval(() => {
      //   document.title = "Text Manupulator Install Now";
      // },2000);
      // setInterval(() => {
      //   document.title = "Text Manupulator is Amazing";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Manupulator - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title = "Honk" an = "Another" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
          {/* <Navbar /> */}
          <div className="container my-5">
            <Routes>
                  <Route exact path="/about" element = {<About mode = {mode}/>}>
                  </Route>
                  <Route exact path="/" element = {<Textform showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>}>
                  </Route>
              </Routes>
          </div>
      </Router>
</>
   
  );
}

export default App;
