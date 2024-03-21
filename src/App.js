
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import React, { useState } from 'react';
import Alert from './Components/aLert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
        })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(28 30 50 / 92%)';
      showAlert("Dark mode has been enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
     
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <TextForm heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces: " mode={mode}/>
      <About/>
      </div>
    </>
  );
}

export default App;
