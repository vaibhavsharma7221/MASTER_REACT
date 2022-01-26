import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

       return this.state.isLoggedIn && <div>Welcome vaibhav</div>

        // return (this.state.isLoggedIn ? (
        //     <div>welcome vaibhav</div>
        // ) : (
        //     <div>welcome guest</div>
        // )

        // )

        //     let message

        //     if(this.state.isLoggedIn){
        //         message =<div>welcome vaibhAV</div>
        //     }else{
        //         message=<div>Welcome guest</div>
        //     }    

        // return (<div>{message}</div>)


        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Vaibhav
        //         </div>
        //     )
        // }   else  {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        // <div> 
        //     <div>Welcome Vaibhav!</div>
        //     <div>Welcome Guest</div>
        // </div>
        // )
    }
}

export default UserGreeting;
