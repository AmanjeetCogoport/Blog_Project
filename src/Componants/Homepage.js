import Navbar from "./Navbar"
import React, { useState } from 'react';
import Main from "./Main";
import Featured_card from "./Featured_card";
import Login from "./Login";
import Show_full_blog from "./Show_full_blog";
import Text_editor from "./Text_editor";
import Text_editor2 from "./Text_editor2";
import RichTextEditor from "./RichTextEditor";
import Nav from './Nav'
import Contact from "./Contact_us/Contact";



let Homepage = (props) =>{



    return(

        <>
            <Nav />

            {/* <Main />

            <Featured_card />

            <Login />

            <Show_full_blog />

            <Text_editor />
            
            <Text_editor2 /> */}

            <Contact />


        </>
    )

}

export default Homepage