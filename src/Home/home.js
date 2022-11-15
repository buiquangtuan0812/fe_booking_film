import Heading from "../Heading/heading";
import Suggest from "../Suggest/index";
import ListMovie from "../List_Movie/index";
import Footer from "../Footer/footer";

function Home() {
    return (
        <div>
            <Heading/>
            <Suggest/>
            <ListMovie/>
            <Footer/>
        </div>
    )
}

export default Home;