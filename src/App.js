import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

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
    }, 1000);
  }
  // dark mode
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode Enabled", "success");
      setTimeout(() => {
        
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode Disabled", "warning");
    }
  }
  return (
    <>
      <Navbar title="TextHelper" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}>

      </Alerts>
      <TextForm mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
