import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/Loginpage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
