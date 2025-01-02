import Navbar from "./header.jsx"
import Features from "./featues.jsx"
import Offerride from "./offerride.jsx"

import Search from "./SearchPage.jsx"
import UsersCarousel from "./testimonial.jsx"

import { Link } from 'react-router-dom';
import Footer from "./footer.jsx"
import Images from "./image.jsx"


function Home(){
    
    
   
    
  
    
    return(
        <>
            
         <Navbar/>
         <Images/>
        
        <Search/>
        <Features/>
        <Offerride/>
       <UsersCarousel/>
        <Footer/>
        
        
        
        
        </>
    )
}
export default Home;