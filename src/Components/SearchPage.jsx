import "../Styling/riderSearch.css"
import { Component } from "react";
import { Link } from 'react-router-dom';


class Search extends Component{
    constructor(props){
        super()
        this.state={
            from:"",
            to:"",
            date:"",
            error:"",
            rides:[]
          
        }
    }

        handleChange = (event) => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
          };

          handleSubmit = (event) => {
            event.preventDefault();
            const UserDatabase = JSON.parse(localStorage.getItem("rides")) || {};
            let ride=[]
            for(var i in UserDatabase){
               
                if (this.state.from==UserDatabase[i][0] && this.state.to==UserDatabase[i][1] && this.state.date==UserDatabase[i][3]){
                   ride.push({[i]:UserDatabase[i]})

                }
            }
            if (ride.length === 0) {
                this.setState({ ["error"]: "No rides are available", rides: [] });
            } else {
                this.setState({ ["rides"]: ride, error: "" });
            }
           
             
           
        };

    
        






    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <div className="container">
                <input className="input" type="text" placeholder="Leaving from" onChange={this.handleChange} value={this.state.leaving} name="from" required />
                <input className="input" type="text" placeholder="Going to" onChange={this.handleChange} value={this.state.going} name="to" required/>
                <input className="input" type="date" placeholder="Today" onChange={this.handleChange} value={this.state.date} name="date" required/>
                
                
                
                <button className="button" >submit</button>

                
            </div>
            </form>
            
            <p>{this.state.error}</p>
            <div className="ride-container">
          {this.state.rides.map((ride,ind) => (
            <div key={ind} className="ride-card">
              <h3>{this.state.to} ➡ {this.state.from}</h3>
              <p>Driver: {Object.keys(ride)}</p>
              <button className="book-button">Book</button>
              
            </div>
          ))}
        </div>
            
            
            </>
        )
    }
}
export default Search;
