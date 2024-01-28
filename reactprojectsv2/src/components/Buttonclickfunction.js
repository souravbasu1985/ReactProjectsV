import React from 'react'

function Buttonclickfunction()
{
    function ClickButton()
    {
        console.log("Button clicked")
    }
    
    return(
        <div>
            <button onClick={ClickButton}>Click me</button>
        </div>
    )
}
export default Buttonclickfunction