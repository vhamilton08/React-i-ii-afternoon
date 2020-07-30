import React, {Component} from "react"

class Card extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

render(){
    return(
        <div>
            <h1 className="index">{this.props.index + 1}/{this.props.length}</h1>
            <div className="text">

            <h1 className="names">{this.props.person.name.first} {this.props.person.name.last}</h1>
            <h2>From:</h2> <span className="smalltext">{this.props.person.city}, {this.props.person.country}</span>
           <div className="h3">
            <h3>Job Title:</h3> <span>{this.props.person.title}</span>
           </div>
            <h4>Employer:</h4> <span>{this.props.person.employer}</span>
          <h1>Favorite Moives:</h1>

          <ol>{this.props.person.favoriteMovies.map((el) => {
              return <li>{el}</li>
            })}</ol>
            </div>
        </div>
    )
}
}
export default Card