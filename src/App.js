import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#303030';
      showAlert("DarkMode has been enabled", "success");    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("LightMode has been enabled", "success");
   }
  }
  return (
   <>
    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
    </div>
  
  </>
  );
}

export default App;
