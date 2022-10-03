import { useState } from 'react';
import './App.css';
import { NavBarView } from './view/NavBarView';
import {TextAreaView} from './view/textAreaView'

function App() {
  const [mode, modeUpdate] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      modeUpdate('dark')
    }else{
      modeUpdate('light')
    }
  }
  return (<>
    <NavBarView mode={mode} toggleMode={toggleMode}/>
    <TextAreaView title="Enter some text"/>
    </>
  );
}

export default App;
