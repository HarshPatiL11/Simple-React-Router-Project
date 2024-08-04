// src/pages/Home.js
import React, { useState } from 'react';
import '../Css/Home2.css'

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(!showMessage);
  }

  return (
    <main className='HomeMain'>
      <section className='HomeSection'>
        <div>
          <h1>React Router Project</h1>
          <p>
            Welcome to my simple React routing project. This project demonstrates basic routing functionality using React Router.
          </p>
          <p>
            Made by Harsh. Explore the different routes to see how React Router can be used to navigate between different components seamlessly.
          </p>
          <div className='button-container'>
            <button className='primary-button' onClick={handleButtonClick}>Get Started</button>
          </div>
          {showMessage && (
            <p className='nav-message'>
              Please click any navigation element to explore more!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
