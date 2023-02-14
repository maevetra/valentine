import React from 'react';
import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'elank23' & password === '121022') {
      console.log('authenticated');
      navigate('/loading', { replace: true });
    } else {
      alert('Wrong, idiot! 	(҂` ﾛ ´)凸');
      setUsername('');
      setPassword('');
    }

  };

  return (
      <>
        <h1><Typewriter onInit={(typewriter)=> {
          typewriter.typeString("Hi idiot")
          .pauseFor(300)
          .deleteChars(5)
          .typeString("there!").start();
        }}
        />
        </h1>
        <h3 className='fadeIn'>To make sure you're the person whom this message is intended to, 
        <br/>please sign in first.
        </h3>
        <div className='signin-wrapper'>
        <form className='signin-form' onSubmit={handleSubmit}>
          <div className='signin-form-content'>
            <div className='form3'>
              <label>Username</label>
              <div className="help-tip">
                  <p>Your Instagram handle.</p>
                </div>
              <input type="text" id="username" value={username} 
              onChange={(event) =>
                  setUsername(event.target.value)} 
              className="form-control" placeholder="Who tf are you?"/>
            </div>
            <div className='form3'>
            <label>Password</label>
            <div className="help-tip">
                  <p>When did we go ice skating? (MMDDYY)</p>
                </div>
              <input type="password" id="password" value={password}
              onChange={(event) =>
                setPassword(event.target.value)}
              className="form-control" placeholder="You have access?"/>
            </div>
            <button type='submit' className='btn-signin'>
              Sign In
            </button>
          </div>

        </form></div>
      </>
  
  );
};

