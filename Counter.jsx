import React, { useState } from "react";

const Counter = () => {
    //initial count and function to update the count
    const [count, SetCount] = useState(0);
    
    return (
    //create functions, and buttons that reference the funtions
    <React.Fragment>
        <header> The count is: {count} </header>
        <button onClick={() => SetCount (count + 1)}> +1 </button>
        <button onClick={() => SetCount (count -1)}> -1 </button>
        <button onClick={() => SetCount (0)}> 0 </button>
    </React.Fragment>
    )
}

export default Counter;

