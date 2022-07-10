import './sign_up.css';
import swal from 'sweetalert';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Sign_up = (props) => {

    // const navigate = useNavigate();


    const [user_email, setUseremail] = useState('');
    const [user_name, setUsername] = useState('');
    const [user_password, setUserpassword] = useState('');
    const navigate = useNavigate();


    let signup=()=>{

        let currPass = document.getElementById("password").value;
        let savePass = document.getElementById("savepassword").value;
        let emailValue = document.getElementById("email").value;
        let emailVal = emailValue.split('@');

        if(user_email !== "" && user_password !== '' && user_name !== ""){
            axios.post("http://127.0.0.1:3000/users/create_user",{
                email: user_email,
                passward: user_password,
                name: user_name
            } ).then(()=>{
                swal("Good Job!", "you have successfully sign up..", "success");
            // navigate("/");

        })
        }else {
            // alert("all fields are required")
            swal("Oops!", "You Email is not correct.", "deger");
        }

        // if(emailVal.length == 2 & emailVal[1].length >0){
        //     if(currPass == savePass){
        //         swal("Good Job!", "you have successfully sign up..", "success");
        //     }else{
        //         swal("Oops!", "password and confirm passward are not same.", "deger");
        //     }
        // }else{
        //     swal("Oops!", "You Email is not correct.", "deger");
        // }

        navigate("/SignIn")
        
    }
    // navigate("/SignIn")



var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
    var username = document.getElementById("username");
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        username.setCustomValidity(issueArr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}

function passwordValidation(passwordInput) {
    var password = document.getElementById("password");
    var issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
        issueArr.push("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }

}

// let submitForm = () => {
//     let currPass = document.getElementById("password").value;
//     let savePass = document.getElementById("savepassword").value;
//     let emailValue = document.getElementById("email").value;
//     let emailVal = emailValue.split('@');
    

//     if(emailVal.length == 2 & emailVal[1].length >0){
//         if(currPass == savePass){
//             swal("Good Job!", "you have successfully sign up..", "success");
//         }else{
//             swal("Oops!", "password and confirm passward are not same.", "deger");
//         }
//     }else{
//         swal("Oops!", "You Email is not correct.", "deger");
//     }
// }


    return (
        <>

<div className="signupSection">
  <div className="info">
    <h2>Team 2 Blog Sign Up Form</h2>
    <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
    <p>you can write your blog here.</p>
  </div>
  {/* <form action="#" method="POST" className="signupForm" name="signupform"> */}
  <form className="signupForm" name="signupform">
    <h2>Sign Up</h2>
    <ul className="noBullet">
     <li>
        <label for="email"></label>
        <input type="email" onChange={(e) => setUseremail(e.target.value)}  className="inputFields" id="email" name="email" placeholder="Email"  required/>
      </li>
      <li>

        <label for="username"></label>
        <input type="text" className="inputFields" id="username" name="username" placeholder="User name" onChange={(e) => setUsername(e.target.value)} onInput="return userNameValidation(this.value)" required/>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" className="inputFields" id="password" name="password" placeholder="Password" onInput="return passwordValidation(this.value)" required/>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" onChange={(e) => setUserpassword(e.target.value)} className="inputFields" id="savepassword" name="password" placeholder="Confirm Passward" onInput="return passwordValidation(this.value)" required/>
      </li>
      
      <li id="center-btn">
      {/* onClick = {() => submitForm()} */}
        <input type="submit" onClick={() => signup()}  id="join-btn" name="join" alt="Join" value="Sign Up" />
      </li>
    </ul>
  </form>
</div>
        

        </>
    )
}

export default Sign_up;