import React from 'react';
import './App.css';
import './loading.css';
import ProgressBar from './progressBar.js';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/letter', { replace: true });
    }

    return (
        <div className='wrapper'>
            <h3 className='loading-text'> </h3>
            <ProgressBar />
            <div className="container-loading">
                <button type="button" className='view-message'
                id="view-message" onClick={handleClick}>
                Open Message
                </button>
            </div>
        </div>
    );
}