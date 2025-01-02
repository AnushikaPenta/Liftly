import Slider from "react-slick";
import "../Styling/testimonials.css";
import img1 from "../assets/Images/users1.jpeg";
import img2 from "../assets/Images/users2.jpeg";
import img3 from "../assets/Images/user3.jpeg";
import img4 from "../assets/Images/user4.jpg";
import img5 from "../assets/Images/user5.jpg";



const users = [
  {
    name: "Anu Sahithi",
    feedback:
      "This app makes commuting so easy! The drivers are always on time, and the service is super reliable.",
    image: img1,
  },
  {
    name: "Nikhil",
    feedback:
      "Affordable rides with great convenience. I love how clean and safe the cars are!",
    image: img2,
  },
  {
    name: "Sneha",
    feedback:
      "The real-time tracking and quick pickups make this app a lifesaver for my daily travel.",
    image:img3,
  },
  {
    name: "Arjun",
    feedback:
      "Friendly drivers and smooth rides every time. Highly recommended for hassle-free trips!",
    image:img4,
  },
  {
    name: "Pralavi",
    feedback:
      "Affordable fares and excellent service! This app has become my go-to for travel.",
    image: img5,
  },
];

const UsersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    className:"user-wrapper",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="user-carousel">
      <h2 className="heading">What Our Client Says?</h2>
      <Slider {...settings}>
        {users.map((testimonial, index) => (
          <div key={index} className="user-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="user-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="user-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UsersCarousel;
