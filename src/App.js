import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './Components/Loginpage';
import SignupPage from './Components/SignupPage';
import AddPost from './Components/AddPost';
import ViewPost from './Components/ViewPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/add" element={<AddPost/>}/>
        <Route path="/viewall" element={<ViewPost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
