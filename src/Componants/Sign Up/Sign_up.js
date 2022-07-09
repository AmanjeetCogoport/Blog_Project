import './sign_up.css';
import swal from 'sweetalert';

let Sign_up = (props) => {

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

let submitForm = () => {
    let currPass = document.getElementById("password").value;
    let savePass = document.getElementById("savepassword").value;
    if(currPass == savePass){
        swal("Good Job!", "you have successfully sign up..", "success");
    }else{
        swal("Oops!", "password and confirm passward are not same.", "deger");
    }
}


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
        <input type="email" className="inputFields" id="email" name="email" placeholder="Email"  required/>
      </li>
      <li>
        <label for="username"></label>
        <input type="text" className="inputFields" id="username" name="username" placeholder="Your name" oninput="return userNameValidation(this.value)" required/>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" className="inputFields" id="password" name="password" placeholder="Password" oninput="return passwordValidation(this.value)" required/>
      </li>
      <li>
        <label for="password"></label>
        <input type="password" className="inputFields" id="savepassword" name="password" placeholder="Confirm Passward" oninput="return passwordValidation(this.value)" required/>
      </li>
      
      <li id="center-btn">
        <input type="submit" onClick = {() => submitForm()} id="join-btn" name="join" alt="Join" value="Join" />
      </li>
    </ul>
  </form>
</div>
        

        </>
    )
}

export default Sign_up;