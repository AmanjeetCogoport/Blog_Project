import Navbar from "./Navbar"
import React, { useState } from 'react';
import Main from "./Main";
import Featured_card from "./Featured_card";
import Login from "./Login";
import Show_full_blog from "./Show_full_blog";
import Text_editor from "./Text_editor";
import Text_editor2 from "./Text_editor2";
import RichTextEditor from "./RichTextEditor";



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

            <Show_full_blog />

            <Text_editor />
            
            <Text_editor2 />


        </>
    )

}

export default Homepage