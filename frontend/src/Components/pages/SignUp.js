import React, { useState } from 'react';
import '../Css/SignUp.css';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <section className='SignUpsection'>
      <div className="SignUpContainer">
      <div className='formSwitcher'>
        <span 
          className={`FormBtn1 ${isSignUp ? 'active' : ''}`} 
          onClick={() => setIsSignUp(true)}
        >
          Sign-up
        </span>
        <span 
            className={`FormBtn2 ${!isSignUp ? 'active' : ''}`} 
          onClick={() => setIsSignUp(false)}
        >
          Login
        </span>
      </div>
      <div className='formContainer'>
        {isSignUp ? (
          <div className='signupDiv'>
            <h2>Sign Up</h2>
            <form>
              <div>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' required />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' required />
              </div>
              <button type='submit'>Sign Up</button>
            </form>
          </div>
        ) : (
          <div className='loginDiv'>
            <h2>Login</h2>
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' required />
              </div>
              <button type='submit'>Login</button>
            </form>
          </div>
        )}
      </div>
      </div>
      
    </section>
  );
};

export default SignUp;
