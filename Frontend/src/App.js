import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About'
import Members from './Pages/Members/Members'
import Gallery from './Pages/Gallery/Gallery';
import Contactus from './Pages/Contactus/Contactus'
import Login from '../src/Pages/Login/Login';
import Signup from './Pages/Registration/Signup'
const App = () => {
  return (
    <div className='overflow-x-hidden'>
     
  <Router>
      <Routes>
       <Route path='/' element={ <Navbar/>}/>
       <Route path='src/Pages/About' element={ <About/>}/>
       <Route path='/src/Pages/Members' element={ <Members/>}/>
       <Route path='/src/Pages/Gallery' element={ <Gallery/>}/>
       <Route path='/src/Pages/Contactus' element={ <Contactus/>}/>
       <Route path='/src/Pages/Login'element={ <Login/>}/>
       <Route path='/src/Pages/Registration' element={ <Signup/>}/>
      </Routes>
    </Router>
  </div>
   
   
  );
}

export default App
