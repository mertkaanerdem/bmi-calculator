import React from "react";
import './App.css'
import BMICalculator from './components/BMICalculator/BMICalculator'
import BMIInfo from "./components/BMIInfo/BMIInfo";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-2">
      <h1>BMI CALCULATOR</h1>
      <BMICalculator />
      <BMIInfo />
    </div>
  );
}

export default App;
