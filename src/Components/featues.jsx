import "../Styling/features.css"


function Features(){
    return(
        <>
        
    <div className="features-container">
      <div className="feature">
        <div className="icon">🚗</div>
        <h3 className="heading">Your pick of rides at low prices</h3>
        <p className="lines">
          No matter where you’re going, by bus or carpool, find the perfect ride
          from our wide range of destinations and routes at low prices.
        </p>
      </div>
      <div className="feature">
        <div className="icon">👥</div>
        <h3 className="heading">Trust who you travel with</h3>
        <p className="lines">
          We take the time to get to know each of our members and bus partners.
          We check reviews, profiles, and IDs, so you know who you’re traveling
          with and can book your ride at ease on our secure platform.
        </p>
      </div>
      <div className="feature">
        <div className="icon">⚡</div>
        <h3 className="heading">Scroll, click, tap and go!</h3>
        <p className="lines">
          Booking a ride has never been easier! Thanks to our simple app powered
          by great technology, you can book a ride close to you in just minutes.
        </p>
      </div>
    </div>

        
        </>
    )
}


export default Features
