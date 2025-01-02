import "../Styling/riderSearch.css"
import { Component } from "react";
import { Link } from 'react-router-dom';


class Rider extends Component{
    constructor(props){
        super()
        this.state={
            from:"",
            to:"",
            date:"",
            seats:"",
            username:"",
            book:""
        }
    }

        handleChange = (event) => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
          };

          handleSubmit = (event) => {
            event.preventDefault();
            const UserDatabase = JSON.parse(localStorage.getItem("rides")) || {};
            console.log(UserDatabase)
           
            const updateDatabase={...UserDatabase,[this.state.username]:[this.state.from,this.state.to,this.state.seats,this.state.date]} 
            localStorage.setItem("rides", JSON.stringify(updateDatabase));
            this.setState({["book"]:"Thankyou for publishing the ride if any person are intersted we will inform you through email"})
           
            
            
          };

    







    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <div className="container">
                <input className="input" type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username} name="username" required />
                <input className="input" type="text" placeholder="Leaving from" onChange={this.handleChange} value={this.state.leaving} name="from" required />
                <input className="input" type="text" placeholder="Going to" onChange={this.handleChange} value={this.state.going} name="to" required/>
                <input className="input" type="date" placeholder="Today" onChange={this.handleChange} value={this.state.date} name="date" required/>
                <input className="input" type="number" min="1"  placeholder="seats available" onChange={this.handleChange} value={this.state.seats} name="seats" required/>
                <button className="button" >submit</button>
            </div>
            </form>
            <h2 >{this.state.book}</h2>
            
            </>
        )
    }
}
export default Rider;
