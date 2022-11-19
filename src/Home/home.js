import { useState, useEffect } from "react";

import Heading from "../Heading/heading";
import Suggest from "../Suggest/index";
import ListMovie from "../List_Movie/index";
import Footer from "../Footer/footer";
import { useLocation } from "react-router-dom";

function Home() {
    const [nameUser, setName] = useState("");
    const location = useLocation();
    const {tokenUser} = location.state.tokenUser;
    useEffect(() => {
        if (location.state) {
            setName(location.state.nameUser);
        }
    })
    return (
        <div>
            <Heading name = {nameUser}/>
            <Suggest name = {nameUser} token = {tokenUser}/>
            <ListMovie name = {nameUser} token = {tokenUser}/>
            <Footer/>
        </div>
    )
}

export default Home;