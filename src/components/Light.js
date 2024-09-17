import React from 'react';
import '../styles/Light.css';

const Light = ({ color, active }) => {
    return (
        <div className={`light ${color} ${active ? 'active' : ''}`}></div>
    );
};

export default Light;
