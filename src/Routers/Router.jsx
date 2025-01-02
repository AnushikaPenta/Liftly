import { BrowserRouter,Routes ,Route} from "react-router-dom";

import Home from "../Components/Home.jsx";

import Rider from "../Components/riderPage.jsx"
import Search from "../Components/SearchPage.jsx"
import About from "../Components/About.jsx"
import Contact from "../Components/Contact.jsx";

function Rout(){



  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/riderPage.jsx" element={<Rider/>}></Route>
        <Route path="/SearchPage.jsx" element={<Search/>}></Route>
        <Route path="/About.jsx" element={<About/>}></Route>
        <Route path="/Contact.jsx" element={<Contact/>}></Route>

      </Routes>
      
      </BrowserRouter>

  )
}

export default Rout
