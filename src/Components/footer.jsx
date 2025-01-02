import "../Styling/footer.css"
import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
        
        <footer className="footer-container">
      <div className="footer-content">
        <div>
          <h3>top carpool routes</h3>
          <ul>
            <li>Delhi → Chandigarh</li>
            <li>Mumbai → Pune</li>
            <li>Kanpur → Lucknow</li>
            <li >Bengaluru → Chennai</li>
            
          </ul>
        </div>

        <div>
          <h3>About</h3>
          <ul>
            <li ><Link to="/Contact.jsx">Contact Us </Link></li>
            <li><Link to="/About.jsx">About Us</Link></li>
            
            
          </ul>
        </div>

        <div>
          <div className="language-button">
            <button>Language - English (India)</button>
          </div>
          
        </div>
      </div>
    </footer>
        
        </>
    )
}
export default  Footer;
