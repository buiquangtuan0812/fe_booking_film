import { useState, useEffect } from "react";

import Heading from "../Heading/heading";
import Suggest from "../Suggest/index";
import ListMovie from "../List_Movie/index";
import Footer from "../Footer/footer";
import { useLocation } from "react-router-dom";

function Home() {
    const [nameUser, setName] = useState("");
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            setName(location.state.nameUser);
        }
    })
    return (
        <div>
            <Heading name = {nameUser}/>
            <Suggest name = {nameUser}/>
            <ListMovie name = {nameUser}/>
            <Footer/>
        </div>
    )
}

export default Home;