import './App.css';
import Homepage from './Componants/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Show_full_blog from './Componants/Show_full_blog';
import Login from './Componants/Login';
import Contact from './Componants/Contact_us/Contact';



function App() {


  return (

      <Router>
          <Routes> 
            <Route  path='/' element={<Homepage />} />
            <Route path='/blog' element = {<Show_full_blog />} />
            <Route path='/signIn' element= {<Login />} />
            <Route path='/signUp' element={<Login />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>

      </Router>
      

  );
}

export default App;
