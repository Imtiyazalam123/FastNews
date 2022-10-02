
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


function App() {
  let [progress, setProgress] = useState(0);
  function setProgressValue(value) {
    setProgress(value);
  }
  return (
   <div>
    
    <BrowserRouter>
    <LoadingBar
        color='#07f7af'
        progress={progress}
        height = {4}
      />
     <NavBar/>
      <Routes>
      <Route path = "/FastNews" element={
          <News pageSize ={21} key ="default1" country = "in" category="general" setProgressCount={setProgressValue}/> 
          }/>
      <Route path = "/" element={
          <News pageSize ={21} key ="default" country = "in" category="general" setProgressCount={setProgressValue}/> 
          }/>
  
        <Route path = "/business" element={
          <News pageSize ={21} key ="business" country = "in" category="business" setProgressCount={setProgressValue}/> 
          }/>
        
        <Route path = "/general" element={
          <News pageSize ={21} key ="general" country = "in" category="general" setProgressCount={setProgressValue}/> 
        }/>
        
        <Route path = "/sports" element={
          <News pageSize ={21} key = "sports" country = "in" category="sports" setProgressCount={setProgressValue}/>
        }/>
        
        <Route path = "/technology"  element={
          <News pageSize ={21} key="technology" country = "in" category="technology" setProgressCount={setProgressValue}/>
        }/>
        
        <Route path = "science"  element={
          <News pageSize ={21} key = "science" country = "in" category="science" setProgressCount={setProgressValue}/>
        }/>
        
        <Route path = "/entertainment"  element={
          <News pageSize ={21} key = "entertainment" country = "in" category="entertainment" setProgressCount={setProgressValue}/>
        }/>
       
        <Route path = "/health"  element={
          <News pageSize ={21} key = "health" country = "in" category="health" setProgressCount={setProgressValue}/>
        }/>
        
      </Routes>
    </BrowserRouter>
    
 </div>
  );
}

export default App;
