import React from 'react';
import './App.css';
import './letter.css';

const Letter = () => {
    
    return (
        <div className='container'>
            <div className='envelope'></div>
            <div className='card'>
                <p className='message'><i>Roses are red,
                <br/>Violets are blue,
                <br/>I cannot rhyme, but at least my Valentine is </i><b>you</b>.
                </p>
                <img src={process.env.PUBLIC_URL + '/heart_pink.png'} alt='img'/>
            </div>
            <div className='cover'></div>
            <div className='lid'></div>
            <div className='shadow'></div>
            <div className='instruction'>
                <p>press and hold the envelope to open</p>
            </div>
        </div>
        
    );
};

export default Letter;