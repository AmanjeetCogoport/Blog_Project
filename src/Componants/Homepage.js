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
import Blog_card from "./Blog_card";



let Homepage = (props) =>{



    return(


        
        <>
        {/* <Main /> */}
        {/* <Blog_card /> */}
        {/* <Text_editor /> */}
        <Text_editor2 />
        <p className="my-5"></p>
        <h1 className="my-5"></h1>

        <h2 className="my-5"></h2>
        <h1 className="my-5"></h1>
        <p className="my-5"></p>
        <h1 className="my-5"></h1>
        </>
    )

}

export default Homepage