import React, { useState } from 'react'
import './BMICalculator.css'
import {LowWeight, HightWeight, NormalWeight} from "../Recipes/Recipes";

function BMICalculator() {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [bmi, setBmi] = useState()

    function handleHeight(e) {
        var height = e.target.value;
        setHeight(height)
    }
    function handleWeight(e) {
        setWeight(e.target.value)
    }

    function hesapla() {
        let result = (height / 100) * (height/100);
        result = weight / result;
        result = result.toFixed(0)
        setBmi(result)
    }

    localStorage.getItem("height", height)
    localStorage.setItem("bmi", bmi)

    return (
        <div className="bg-dark bg-gradient container calculatorArea col-6 shadow border-bottom">
            <input
            className="col-6 form-control my-2 fs-2 fw-bold"
            placeholder="Your height(cm)" value={height} onChange={handleHeight} />
            <input
            className="col-6 form-control my-2"
            placeholder="Weight (kg)" value={weight} onChange={handleWeight}/>
            <button className="btn  btn-outline-primary my-2" onClick={hesapla} onKeyUp={hesapla}>RESULT</button>
           <h4><span className="text-light">Your BMI is</span>
                {

                (bmi == null) ? <p className="text-light">_ _</p> 
                
                :

                bmi > 25 
                ? 
                <div>

                <p className="text-danger">{bmi} <br/>too much</p> 
                <HightWeight />
                </div>
                : 

                bmi < 18
                ?
                <div>
                <p className="text-danger">{bmi} <br/> too low</p> 
                <LowWeight />
                </div>
                :
                <div>
                <p className="text-success">{bmi} <br/>ideal</p> 
                <NormalWeight />
                </div>
                } 
                </h4>
                
        </div>
    )
}

export default BMICalculator