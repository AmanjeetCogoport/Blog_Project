import './sign_in.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


let Sign_in = (props) => {


    const [user_email, setUseremail] = useState('');
    const [user_password, setUserpassword] = useState('');
    const [error,setError] = useState()
    const navigate = useNavigate();

    const check = async(user_email,user_password) => {
            const {data} = await axios.post("http://127.0.0.1:3000/users/login",{
                email: user_email,
                passward: user_password
            })

            if(data.text){
                setError(data.text)
            }else{
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/")
            }
            navigate("/homepage")
    }

    let login=()=>{
        if(user_email !== "" && user_password !== '' ){
            check(user_email,user_password)
        }else {
            // alert("all fields are required")
            swal("Oops!", "all fields are required", "warning")
        }
        navigate("/homepage")
    }

    return (

        <>
    <div className="login-box" style={{backgroundImage: ("#132649", "#286dbb")}}>
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="email" name="" onChange={(e) => setUseremail(e.target.value)} required />
      <label>Email Id</label>
    </div>
    <div className="user-box">
      <input type="password" onChange={(e) => setUserpassword(e.target.value)} name="" required />
      <label>Password</label>
    </div>
    <a type='button' onClick={() => login()} href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>

        
        </>
    )
}

export default Sign_in;