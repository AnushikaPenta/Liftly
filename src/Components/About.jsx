import imgs from "../assets/images/rideSharing.jpg"
import React from "react";
import "../Styling/About.css";

const About = () => {
  return (
            
    <div className="about-section">
        
        
      <div className="text-content">
      
        <h2>Welcome to Liftly</h2>
        <p>
       
         We allows users to share rides with minimal deviations from their routes. Features
          include dynamic cost-splitting, eco-friendly ride preferences, and in-app communication 
          for easy coordination. Users can rate rides for trust and reliability, and the app ensures
           safety with identity verification and GPS tracking. Advanced scheduling options and multi-stop ride
            sharing make it flexible for both daily commuters and occasional travelers. This fosters cost savings, 
            reduces carbon footprints, and promotes a community-driven travel culture.
        </p>
        <div className="features">
          <div>
            <span>✔</span> Low Cost 
          </div>
          <div>
            <span>✔</span> great company
          </div>
          <div>
            <span>✔</span> More Flexible
          </div>
          
        </div>
      </div>
      <div className="image-content">
        <img
          src={imgs}
          
          className="car-image"
        />
      </div>
    </div>
  );
};

export default About;
