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
import Create_blog from './Componants/Create_Blog/Create_blog';
import Edit_blog from './Componants/Edit_blog/Edit_blog';
import Sign_in from './Componants/Sign In/Sign_in';
import Sign_up from './Componants/Sign Up/Sign_up';



function App() {


  return (


        

      <BrowserRouter>
        <Nav />

          <Routes> 
            {/* <Route  path='/' element={<Blog_card />} /> */}
            <Route  path='/' element={<Create_blog />} /> 
            <Route path='/blog' element = {<Blog_card />} />
            <Route path='/blog/:id' element = {<Show_full_blog />} />
            {/* <Route path='/signIn' element= {<Login />} /> */}
            {/* <Route path='/signUp' element={<Sign Up />} /> */}
            <Route path='/SignIn' element={<Sign_in />}  />
            <Route path='/SignUp' element={<Sign_up />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/create_blog' element={<Create_blog />} />
            <Route path='/edit_blog/:id' element={<Edit_blog  />} />

          </Routes>

      </BrowserRouter>
      

  );
}

export default App;
