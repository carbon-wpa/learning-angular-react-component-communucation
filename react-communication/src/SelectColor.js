import './App.css';
import React from "react";

function SelectColor({setSelectedColor}) {

    function onSelectColor(color) {
        setSelectedColor(color)
    }

    const colors = ['white', 'black', 'yellow', 'red'];

    return (
        <>
            <div>
                <h3>Select color</h3>
            </div>
            <div>
                <select onChange={event => onSelectColor(event.target.value)}>
                    {
                        colors.map(color => <option value={color} key={color}>{color}</option>)
                    }
                </select>
            </div>
        </>
    );
}

export default SelectColor;
