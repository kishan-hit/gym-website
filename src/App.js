import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';
import EmailVerify from './components/EmailVerify';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users/:id/verify/:token' element={<EmailVerify/>} />
      </Routes>
    </div>
  );
}

export default App;
