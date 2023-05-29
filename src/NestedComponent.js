import React from 'react'

function NestedComponent() {
    return (
        <div>
            <h1>This is the parent component</h1>
            <Child/>
        </div>
    )
}
const Child=()=>{
    return(
        <div>
            <h3>I am a kid</h3>
        </div>
    )
}
export default NestedComponent
