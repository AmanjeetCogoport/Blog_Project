import Navbar from "./Navbar"
import React, { useState } from 'react';
import Main from "./Main";
import Featured_card from "./Featured_card";
import Login from "./Login";



let Homepage = (props) =>{

    const [visibleItem, setVisibleItem] = useState(["visibleItem"])

    // set signin signup visible
    let setVisible = () => {
        setVisibleItem("visible");
    }


    return(

        <>
            <Navbar signIn="Sign in" signUp="Sign Up" class={visibleItem}/>

            <Main />

            <Featured_card />

            <Login />
        </>
    )

}

export default Homepage