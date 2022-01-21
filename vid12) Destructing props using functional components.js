
import React from 'react'

// const Greet = ({ name, charactername }) => {
//     return (
//         <div>
//             <h1>
//                 hello {name} aka {charactername}
//             </h1>
//         </div>
//     )
// }

const Greet=props=>{
    const{name,charactername}=props
    return(
        <div>
            <h1>Hello{name} aka {charactername}</h1>
        </div>
    )
}

export default Greet
