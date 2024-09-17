const trafficLightReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LIGHT':
            const nextLight = state.currentLight === 'green' ? 'yellow' :
                state.currentLight === 'yellow' ? 'red' : 'green';
            return {
                ...state,
                currentLight: nextLight,
                countdown: nextLight === 'green' ? 10 : nextLight === 'yellow' ? 3 : 7,
            };
        case 'REQUEST_CROSSING':
            return { ...state, pedestrianRequest: true };
        case 'EMERGENCY_OVERRIDE':
            return { ...state, emergencyOverride: true };
        case 'RESET_TIMER':
            return { ...state, countdown: action.payload };
        default:
            return state;
    }
};

export default trafficLightReducer;
