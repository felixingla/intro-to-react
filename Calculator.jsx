import React, { useState } from "react";

const Calculator = () => {
    //initial count and function to update the count
    const [count, SetCount] = useState(0);
    
    return (
    //create functions, and buttons that reference the funtions
    <React.Fragment>
        <h1> The count is: {count} </h1>
        <button onClick={() => SetCount (count + 1)}> +1 </button>
        <button onClick={() => SetCount (count + 2)}> +Maraya </button>
        <button onClick={() => SetCount (count + 3)}> +3 </button>
        <button onClick={() => SetCount (count + 4)}> +4 </button>
        <button onClick={() => SetCount (count + 5)}> +5 </button>
        <button onClick={() => SetCount (count + 6)}> +6 </button>
        <button onClick={() => SetCount (count + 7)}> +7 </button>
        <button onClick={() => SetCount (count + 8)}> +8 </button>
        <button onClick={() => SetCount (count + 9)}> +9 </button>
    </React.Fragment>
    )
}

export default Calculator;

