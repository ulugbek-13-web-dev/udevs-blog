
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Latest from './components/Latest/Latest'
import AddPost from './components/AddPost/AddPost'

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
           <div className="App">
            <Routes>
              <Route exact path='/'  element={<Home/>}></Route>
              <Route exact path='/about'  element={<About/>}></Route>
              <Route exact path="/latest" element={<Latest/>} ></Route>
              <Route exact path="/add" element={<AddPost/>}></Route>
            </Routes>
          </div>
       </Router>
    </div>



  );
}

export default App;
