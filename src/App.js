
import './App.css';

import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
   Route,
} from "react-router-dom";

const App=()=>{
  const pageSize = 8;
  
   
 const [progress, setProgress] = useState(0)
  
 
    return (
      <div>
      <Router>
       <NavBar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
       <Routes>
      
        <Route  path='/general'  element={<News setProgress={setProgress} key='12' pageSize={pageSize} country="in" category="general" />}></Route>
        <Route path="/business"element={<News setProgress={setProgress}  key='13' pageSize={pageSize} country="in" category="business" />}></Route>
        <Route path="/entertainment" element={<News setProgress={setProgress} key='14' pageSize={pageSize} country="in" category="entertainment" />}></Route>
        <Route path="/health" element={<News setProgress={setProgress} key='15' pageSize={pageSize} country="in" category="health" />}></Route>
        <Route path="/science" element={<News setProgress={setProgress} key='16' pageSize={pageSize} country="in" category="science" />}></Route>
        <Route path="/sports" element={<News setProgress={setProgress} key='17' pageSize={pageSize} country="in" category="sports" />}></Route>
        <Route path="/technology" element={<News setProgress={setProgress} key='18' pageSize={pageSize} country="in" category="technology" />}></Route>
        </Routes>
       </Router>
      </div>

    )
  
}

export default App;