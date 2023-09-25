import React, { useState } from 'react';
import '../Home.css'; // Import your CSS file
import Header from '../common/Header';
import Footer from '../common/Footer';
const Login = () => {
  const [activeTab, setActiveTab] = useState('login');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
   <>
   <Header/>
   <div className='bg-col'>
   <div className="login-cont">
      <div className="login-tabs">
        <button
          className={`login-tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => toggleTab('login')}
        >
          Login
        </button>
        <button
          className={`login-tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => toggleTab('signup')}
        >
          Signup
        </button>
      </div>

      {activeTab === 'login' && (
        <form className="login-form">
          {/* Login Form Content */}
          {/* Include input fields for email and password */}
          <label>Email:</label>
          <input type="email" />

          <label>Password:</label>
          <input type="password" />

          <button className="blue-button">Login</button>
        </form>
      )}

      {activeTab === 'signup' && (
        <form className="signup-form">
          {/* Signup Form Content */}
          {/* Include input fields for username, email, contact no, password, and address */}
          <label>Username:</label>
          <input type="text" />

          <label>Email:</label>
          <input type="email" />

          <label>Contact No:</label>
          <input type="text" />

          <label>Password:</label>
          <input type="password" />

          <label>Address:</label>
          <input type="text" />

          <button className="blue-button">Signup</button>
        </form>
      )}
    </div>
   </div>
   
  <Footer/>    
   </>
  );
};

export default Login;
