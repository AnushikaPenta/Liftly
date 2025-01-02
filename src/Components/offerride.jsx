import "../Styling/offerride.css"
import { Link } from "react-router-dom"
import img from "../assets/images/riding.jpg"


function Offerride(){
    return(
        <>
          <div className="ridesharecontainer">
      <div className="text-section">
        <h1>Driving in your car soon?</h1>
        <p>Let's make this your least expensive journey ever.</p>
        <button className="offer-ride-button"><Link to="./riderPage.jsx">Offer a ride</Link></button>
      </div>
      <div >
      <img src={img} width={400}></img>
      </div>
    </div>
        
        
        </>
    )
}

export default Offerride;
