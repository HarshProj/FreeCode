import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Question } from './Components/Question';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Compiler } from './Components/Compiler';
function App() {
  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <Router>

        <Routes>
          <Route path="Compiler" element={<Compiler/>}/>

          <Route path='/' element={<Question/>}/>
        </Routes>
    </Router>
    
    </>
  );
}

export default App;
