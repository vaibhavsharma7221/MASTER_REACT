
import React from 'react'

//function Greet(){
//    return <h1>Hello Kanchi!</h1>
//}

const Greet = props => {
    console.log(props)

return (
<div>
<h1>hello {props.name} aka {props.charactername}</h1>
{props.children}
</div>
)
}

export default Greet
