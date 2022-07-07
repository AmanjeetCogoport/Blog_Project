import Navbar from "./Navbar"
import React, { useState } from 'react';



let Homepage = (props) =>{

    const [visibleItem, setVisibleItem] = useState(["invisibleItem"])

    // set signin signup visible
    let setVisible = () => {
        setVisibleItem("visible");
    }


    return(

        <>
            <Navbar signIn="Sign in" signUp="Sign Up" class={visibleItem}/>
        </>
    )

}

export default Homepage