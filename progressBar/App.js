import { useEffect,useState } from 'react';
import './App.css';
import {ProgessBar} from './progessbar/ProgessBar'
function App() {
  const [value,setValue]=useState(0);
  const [success,setSuccess]=useState(false);


  useEffect(()=>{
setInterval(()=>{
  setValue((x)=>x+0.1)
},20)
  },[])
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <ProgessBar value={value} onComplete={()=>setSuccess(true)}/>
        <h6>{success?"complete":"loading"}</h6>
    </div>
  );
}

export default App;
