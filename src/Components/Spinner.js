import React from "react";
import "./Spinner.css"

const Spinner=()=>
{
    return(
        <div>
            <span className="loader"></span>
            <p className="text-bgDark text-lg font-semibold py-11">Loading...</p>
        </div>
    )
};
export default Spinner;