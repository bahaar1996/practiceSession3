import React, { useState } from 'react';
import Login from './components/Login';
import MainHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
import './App.css'
import { useEffect } from 'react';
import Parent from './components/Parent';
import C1 from './performanceComponents/C1';
import MyReducer from './assets/useReducerComponents/MyReducer';
import Products from './eshopComponents/Products';

function App() {
  const localStorageValue = localStorage.getItem("loggedIn")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const  s = "aaaaa"
  useEffect(()=>{
    // console.log("use effect executing...")
    if(localStorageValue==="yes"){
      setIsLoggedIn(true)
    }
},[])
  const loginHandler = (email, password) => {
    if(email==='ali' && password==='123'){
      localStorage.setItem("loggedIn","yes")
    setIsLoggedIn(true);}
    else
    alert('نام کاربری یا رمز عبور اشتباه است')
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };  
  return (
    <div>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <WelcomePage onLogout={logoutHandler} />}
      </main>
      <Parent/> */}
      {/* <C1/> */}
      {/* <MyReducer/> */}
      <Products/>
    </div>
  );
}

export default App
