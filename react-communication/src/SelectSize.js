import './App.css';
import React from "react";

function SelectSize({setSelectedSize}) {

    function onSelectSize(size) {
        setSelectedSize(size)
    }

    return (
        <>
            <div>
                <h3>Select Size</h3>
            </div>
            <div>
                <input type="number" min="39" max="47" step="1" onChange={event => onSelectSize(event.target.value)}/>
            </div>

        </>
    );
}

export default SelectSize;
