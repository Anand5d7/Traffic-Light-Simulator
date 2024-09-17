# Traffic Light Simulator with Pedestrian Crossing 🚦
## Description
This project is a Traffic Light Simulator built using React. It simulates a traffic light system with three lights (Green, Yellow, and Red) and includes a pedestrian crossing feature. The pedestrian can request a crossing, and the system will switch the light to Red to allow safe pedestrian crossing. The project also includes state management using useContext and useReducer for handling the traffic light sequence, pedestrian crossing requests, and timers.

## Features
 - Traffic Light Sequence: Green -> Yellow -> Red -> Green
 - Green light: 10 seconds
 - Yellow light: 3 seconds
 - Red light: 7 seconds
# Pedestrian Crossing:
 - Pedestrian can request crossing at any time.
 - If the button is clicked during Green or Yellow, the system waits until the current sequence finishes before turning Red for pedestrian crossing.
 - After the pedestrian crossing, the light stays Red for an additional 5 seconds.
 - useContext State Management: Manages the traffic light system, pedestrian crossing requests, and timers.
 - Countdown Timer: Shows the remaining time for each light.
# Bonus Feature (Optional):
 - Emergency Vehicle Override: Override the traffic lights to allow emergency vehicles to pass through.
## Technologies Used
 - React: Frontend framework.
 - useContext & useReducer: For managing the traffic light state.
 - CSS: For styling the traffic lights and the pedestrian crossing button.
## Project Structure
```bash
  traffic-light-simulator/
│
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── TrafficLight.js
│   │   ├── Light.js
│   │   ├── PedestrianButton.js
│   ├── context/
│   │   ├── TrafficLightContext.js
│   │   ├── trafficLightReducer.js
│   ├── styles/
│   │   ├── TrafficLight.css
│   │   ├── Light.css
│   │   ├── PedestrianButton.css
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```
## Installation and Setup
# To run this project locally, follow these steps:
 - Clone the repository:
   ```bash
   git clone https://github.com/Anand5d7/Traffic-Light-Simulator.git
  ```
  - Navigate to the project directory:
  ```bash
  cd traffic-light-simulator
  ```
  - Install the dependencies:
  ```bash
  npm install
  ```
  - Run the development server:
  ```bash
  npm start
  ```
   - The project will open at http://localhost:3000 in your browser.
## Usage
  - The traffic light will cycle through Green -> Yellow -> Red.
  - Click the Pedestrian Button to request a crossing. The system will stop traffic and allow pedestrians to cross.
  - A countdown timer next to each light shows the remaining time before the light changes.
## Future Enhancements
  - Add an Emergency Vehicle Override feature to interrupt the light sequence for emergency vehicles.
  - Implement sound notifications for visually impaired pedestrians.
## Live Demo
You can view a live demo of the application.


https://github.com/user-attachments/assets/727397d4-0206-4081-adad-630ddd609904



## Deployment
https://traffic-light-simulator-three.vercel.app/
## License
  - This project is licensed under the MIT License - see the LICENSE file for details.
## Acknowledgment
# I would like to express my gratitude to the following:
  - Levon Techno Solution Pvt Ltd, Bengaluru for the opportunity to work on this assignment.
  - The React and JavaScript communities for providing excellent learning resources.
  - Special thanks to all those who supported and encouraged me during the development of this project.
