import './App.css';
import Homepage from './Componants/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Show_full_blog from './Componants/Show_full_blog';
import Login from './Componants/Login';
import Contact from './Componants/Contact_us/Contact';
import Blog_card from './Componants/Blog_card';
import Featured_card from './Componants/Featured_card'
import Nav from './Componants/Nav';



function App() {


  return (


        

      <BrowserRouter>
        <Nav />

          <Routes> 
            <Route  path='/' element={<Blog_card />} />
            <Route path='/blog' element = {<Blog_card />} />
            <Route path='/blog/:id' element = {<Show_full_blog />} />
            <Route path='/signIn' element= {<Login />} />
            <Route path='/signUp' element={<Login />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>

      </BrowserRouter>
      

  );
}

export default App;
