import React, { Component } from 'react'

export class count extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {

        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => {
        //     console.log('callback value', this.state.count)
        // }
        // )

        this.setState((prevState,props) => ({
            count: prevState.count + 1 //+props.addval
        }))

        console.log(this.state.count)
    }

    incrementfive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementfive()}>increment</button>

            </div>
        )
    }
}

export default count
