import React, { useState } from "react";

const Counter = () => {
    //initial count and function to update the count
    const [count, SetCount] = useState(2);
    
    return (
    //create functions, and buttons that reference the funtions
    <React.Fragment>
        <h1> The count is: {count} </h1>
        <button onClick={() => SetCount (count + 1)}> +1 </button>
        <button onClick={() => SetCount (count -1)}> -1 </button>
        <button onClick={() => SetCount (0)}> 0 </button>
    </React.Fragment>
    )
}

export default Counter;

