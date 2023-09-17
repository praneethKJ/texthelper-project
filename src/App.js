import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailValidator from './components/EmailValidator';


function App() {
  // alert
  const [alert, setAlert] = useState(null)
  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    })
    setTimeout(() => {
      showAlert(null)
    }, 1500);
  }
  // dark mode
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode Disabled", "warning");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextHelper" alert={alert} mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <Routes>
        <Route index element={
          <TextForm mode={mode} showAlert={showAlert} />}/>
      <Route path="/TextForm" element={ <TextForm mode={mode}/>}/>
      <Route path="/About" element={<About mode={mode}/>
    }/>
      <Route path="/EmailValidator" element={<EmailValidator mode={mode}/>}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;