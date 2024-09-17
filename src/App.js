import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import TrafficLight from './components/TrafficLight';
import './App.css';

const App = () => {
    return (
        <TrafficLightProvider>
            <div className="App">
                <h1>Traffic Light Simulator</h1>
                <TrafficLight />
            </div>
        </TrafficLightProvider>
    );
};

export default App;
