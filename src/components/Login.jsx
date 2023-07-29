import React, { useRef} from 'react';
import styles from './Login.module.css';
import Button from './Button';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = (props) => {

const [userData, setUserData]=useState({user:'', password:''});
const [isButtonDisabled, setIsButtonDisabled]=useState(true)
// useEffect(()=>{
//   console.log("useeffect in logon executed...")
// if(userData.user.trim().length === 0 || userData.password.trim().length === 0){
//   setIsButtonDisabled(true)
// }
// else {
//   setIsButtonDisabled(false)
// }
// },[userData.user,userData.password])
useEffect(()=>{
 const timer = setTimeout(() => {
  console.log("useEffect in login executed...")
  setIsButtonDisabled(userData.user.trim().length === 0 || userData.password.trim().length === 0)
 }, 500);
 return()=>{
  
  clearTimeout(timer)
 }
}
,[userData])

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(userData.user, userData.password);
  };
const usernameChangeHandler=(e)=>{
  e.preventDefault()
setUserData(prev=>({...prev, user:e.target.value}))
}
const passwordChangeHandler=(e)=>{
e.preventDefault();
setUserData(prev=>({...prev,password:e.target.value}))
}
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        
        <div  className={`${styles.dataContainer} `}  >
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
           onChange={usernameChangeHandler}
           value={userData.user}
          />
        </div>

        <div
          className={`${styles.dataContainer} `} >
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            value={userData.password}
          />
        </div>

        <div className={styles.submit}>
          <Button type="submit" disabled={isButtonDisabled} >
            ورود
          </Button>
        </div>
        
      </form>
      </div>
  );
};

export default Login;
