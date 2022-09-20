import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Listing from './Components/Listing';
import Agency from './Components/Agency';
import Login from './Components/Login';
import Header from './Components/Header';


function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/agency" element={<Agency/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
