import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TextHelper" mode={mode} toggleMode={toggleMode}/>
    <TextForm mode={mode}/>
    </>
  );
}

export default App;
