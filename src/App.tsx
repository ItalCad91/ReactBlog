import Navbar from './Components/Navbar/Navbar'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import ContactPage from './Components/ContactPage'
import {Route, Routes} from "react-router-dom"


function App() {

  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path = "/Home" element = {<HomePage/>}/>
          <Route path = "/About" element = {<AboutPage/>}/>
          <Route path = "/Contact" element = {<ContactPage/>}/>
        </Routes>  
      </div> 
    </div>    
       
  )
}

export default App
