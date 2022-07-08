import Navbar from "./Navbar"
import {useState} from "react";

let Nav = (props) => {


    const [visibleItem, setVisibleItem] = useState(["visibleItem"])

    // set signin signup visible
    let setVisible = () => {
        setVisibleItem("visible");
    }

    return (
        <>
            <Navbar signIn="Sign in / Sign Up" signUp="Sign Up" class={visibleItem}/>
        </>
    )

}

export default Nav;