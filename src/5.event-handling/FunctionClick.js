import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button is Clicked - Function')
    }
    return (
        <div>
            <button className="btn btn-primary"
                    onClick={clickHandler}
            >Click</button>
        </div>
    )
}

export default FunctionClick
