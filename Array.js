import React, { Component } from "react"
import data from "../data"
import Card from "./Card.js"
class Array extends Component {
    constructor() {
        super()
    this.state = {
        data: data,
        index: 0
 }
    }
    next = () => {
        if(this.state.index < this.state.data.length - 1){
            this.setState({index: this.state.index + 1})
        }

    
    }
    previous = () => {
        if(this.state.index > 0){
            this.setState({index: this.state.index - 1})

        }
            
        }

     render() {
        return (
            <div>
                <Card index ={this.state.index} length={this.state.data.length} person={this.state.data[this.state.index]} />
                <div className="swipe">
                <button onClick={this.previous}>previous</button>
                <button onClick={this.next}>Next</button>
                </div>

            </div>
            
        )
    }
}


export default Array

