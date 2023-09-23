
import './App.css';
import Navbar from './components/Navbar' ;
//import About from './components/About';
import Textarea from './components/Textarea';
import React , { useState } from 'react';


function App() {

  

const[mode , setmode] = useState('light');


const togglemode = ()=>{
  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor='#130f33'
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white'

  
  }
}
  return (
    <>
<Navbar title= "Textuils"  mode={mode} togglemode={togglemode}  />

<Textarea heading= "ENTER TEXT AREA" mode={mode}/>

{/*<About about ={"About Us"}/>*/}



 </>
  );
}

export default App;
