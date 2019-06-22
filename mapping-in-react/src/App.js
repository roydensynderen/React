import React from "react";
import Box from "./Box";

function App() {
    const backgroundColors = ["limegreen", "purple", "orange", "yellow"];
    const boxes = backgroundColors.map((color, index) => <Box key={color + index} backgroundColor={color} />);
    return (
        <div>
            {boxes}
        </div>
    )
}

export default App;

//MAP used for converting raw data in the form of an array into react elements OR components.
//We need to provide 'key' prop to the parent element from the callback for performance reasons.
//Get data live from servers and update it in a dynamic way.
//Reuse components