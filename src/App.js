import { useState } from 'react';
import './App.css';
import { NavBarView } from './view/NavBarView';
import {TextAreaView} from './view/textAreaView'

function App() {
  const [mode, modeUpdate] = useState('light');
  const [alert,setAlert]=useState(null)  
  const toggleMode=()=>{
    if(mode==='light'){
      modeUpdate('dark')
      document.body.style.backgroundColor = 'rgb(26 34 42 / 1)';
    }else{
      modeUpdate('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (<>
    <NavBarView mode={mode} toggleMode={toggleMode}/>
    {/* <Alert/> */}
    <TextAreaView title="Enter text" mode={mode}/>
    </>
  );
}

export default App;
