
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import CreatPost from './Pages/CreatPost';
import Login from './Pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname ="/login"
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create post</Link>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <button onClick={signUserOut}>Log Out</button>
  )}
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createpost' element={<CreatPost />} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />


      <Route />
    </Routes>
    </Router >
  );
}

export default App;
