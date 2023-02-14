import { React, useState } from 'react';
import './App.css';
import './loading.css';
import ProgressBar from './progressBar.js';
import { useNavigate} from 'react-router-dom';

export default function Loading() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [left, setLeft] = useState('');
    const [top, setTop] = useState('');
    const [position, setPosition] = useState('');

    function handleClick() {
        navigate('/letter', { replace: true });
    }


    function mouseOver() {
        if (count <= 10) {
            var new_left = getRandomNumber(90);
            var new_top = getRandomNumber(100);
            setLeft(new_left);
            setTop(new_top);
            setPosition('absolute');
            setCount(count + 1);
        }
    }

    const getRandomNumber = (num) => {
        return Math.floor(Math.random() * num);
    }

    return (
        <div className='wrapper'>
            <h3 className='loading-text'> </h3>
            <ProgressBar />
            <div className="container-loading">
                <button type="button" className='view-message'
                style = { {position: `${position}` , left: `${left}%`, top: `${top}%`} } onMouseOver={mouseOver}
                id="view-message" onClick={handleClick}>
                Open Message
                </button>
            </div>
        </div>
    );
}