import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import SignupPage from './Components/SignupPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
