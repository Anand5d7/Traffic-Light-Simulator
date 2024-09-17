import React, { createContext, useReducer } from 'react';
import trafficLightReducer from './trafficLightReducer';

const TrafficLightContext = createContext();

const initialState = {
    currentLight: 'green',
    pedestrianRequest: false,
    emergencyOverride: false,
    countdown: 10,
};

export const TrafficLightProvider = ({ children }) => {
    const [state, dispatch] = useReducer(trafficLightReducer, initialState);

    const changeLight = () => {
        dispatch({ type: 'CHANGE_LIGHT' });
    };

    const requestCrossing = () => {
        dispatch({ type: 'REQUEST_CROSSING' });
    };

    const emergencyOverride = () => {
        dispatch({ type: 'EMERGENCY_OVERRIDE' });
    };

    return (
        <TrafficLightContext.Provider value={{
            state,
            changeLight,
            requestCrossing,
            emergencyOverride
        }}>
            {children}
        </TrafficLightContext.Provider>
    );
};

export default TrafficLightContext;
