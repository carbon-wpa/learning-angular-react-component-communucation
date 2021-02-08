import './App.css';
import React, {useState} from "react";
import ConfigSummary from "./ConfigSummary";
import SelectColor from "./SelectColor";
import SelectSize from "./SelectSize";

function App() {

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState(0);

    return (
        <div>
            <h1>Shoe configurator</h1>
            <div style={{display: 'flex'}}>
                <SelectColor setSelectedColor={setSelectedColor}/>
                <SelectSize setSelectedSize={setSelectedSize}/>
            </div>
            <ConfigSummary selectedColor={selectedColor} selectedSize={selectedSize}/>
        </div>
    );
}

export default App;
