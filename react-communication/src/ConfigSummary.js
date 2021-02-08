import './App.css';
import React from "react";

function ConfigSummary({selectedSize, selectedColor}) {
    return (
        <>
        <h3>Your configuration</h3>
        <div>
        Selected size: {selectedSize || '-'} with color {selectedColor || '-'}
</div>
            </>
    );
}

export default ConfigSummary;
