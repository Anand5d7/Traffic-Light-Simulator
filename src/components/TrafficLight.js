import React, { useContext, useEffect } from 'react';
import TrafficLightContext from '../context/TrafficLightContext';
import Light from './Light';
import PedestrianButton from './PedestrianButton';
import '../styles/TrafficLight.css';

const TrafficLight = () => {
    const { state, changeLight, requestCrossing } = useContext(TrafficLightContext);

    useEffect(() => {
        const interval = setInterval(() => {
            changeLight();
        }, state.countdown * 1000);
        return () => clearInterval(interval);
    }, [state.currentLight]);

    return (
        <div className="traffic-light-container">
            <Light color="red" active={state.currentLight === 'red'} />
            <Light color="yellow" active={state.currentLight === 'yellow'} />
            <Light color="green" active={state.currentLight === 'green'} />
            <PedestrianButton onClick={requestCrossing} />
            <div className="countdown-timer">Time Remaining: {state.countdown}</div>
        </div>
    );
};

export default TrafficLight;
