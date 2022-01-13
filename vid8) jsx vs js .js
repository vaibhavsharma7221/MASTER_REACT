import React from 'react'

/*  const Hello = () =>{
      return(
        <div className='dummyClass'>
            <h1>
                Hello Vaibhav!
           </h1>
        </div>
       )
}

export default Hello */

const hello =()=>{
    return (
        React.createElement( 'div',
        {id:'hello', className:'dummyclass'},
        React.createElement('h1',null,'hello Vaibhav!')
        )
    )
}

export default hello
