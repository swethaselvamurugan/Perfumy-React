import Navbar from "./components/navbar.js";
import Search from "./components/search.js";
import Perfumes from "./components/perfumes.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Perfumes></Perfumes>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

export default App