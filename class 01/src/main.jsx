import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
var abc ={
  
}

createRoot(document.getElementById('root')).render(
 <><h1 id='h1' style={{
  border: "2px solid rgb(1, 18, 179) ",
  borderRadius: "10px " ,
   padding:"5px",
  boxShadow:" 0px 0 10px 10px blue",
 color:'  rgb(34, 34, 228)', 
  fontFamily: `${'Courier New', 'Courier','monospace'}`
 }}>"Hello World & Hello React !!"</h1></>
)
