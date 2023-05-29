import React from 'react'
import {render} from 'react-dom';

function FirstComponent() {
    return (
        <React.Fragment>
            <div>
        <h1>First App in React</h1>
        <img src='img.jpg' alt='This is a image of penguine' width="200px" height='320px'></img>  {/*this is how we use img*/}
    </div>
    </React.Fragment>
        
    )
}

export default FirstComponent
