import React from 'react';
import '../styles/PedestrianButton.css';

const PedestrianButton = ({ onClick }) => {
    return (
        <button className="pedestrian-button" onClick={onClick}>
            Request Crossing
        </button>
    );
};

export default PedestrianButton;
