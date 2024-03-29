import './App.css';
import { Route, Routes} from 'react-router-dom';
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
