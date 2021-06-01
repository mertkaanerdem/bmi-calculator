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

    

    return (
        <div className="container calculatorArea col-6">
            <input
            className="input"
            placeholder="Boy giriniz (cm)" value={height} onChange={handleHeight} />
            <input
            className="input"
            placeholder="Kilo giriniz (kg)" value={weight} onChange={handleWeight}/>
            <button className="btn btn-primary" onClick={hesapla} onKeyUp={hesapla}>Sonuç</button>
            <h2>Your BMI is
                {

                (bmi == null) ? <p>_ _</p> 
                
                :

                bmi > 25 
                ? 
                <div>

                <p style={{color: 'red'}}>{bmi} <br/> biraz kendine dikkat etmelisin</p> 
                <HightWeight />
                </div>
                : 

                bmi < 18
                ?
                <div>
                <p style={{color: 'red'}}>{bmi} <br/> Biraz Kilo Almalısın</p> 
                <LowWeight />
                </div>
                :
                <div>
                <p style={{color: 'green'}}>{bmi} <br/> idealsin, bebeğimsin </p> 
                <NormalWeight />
                </div>
                } 
                </h2>
                
        </div>
    )
}

export default BMICalculator