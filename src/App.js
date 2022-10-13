//Josh Jestine, Roll Number : 3
import {Routes, Route, Link} from "react-router-dom";
import {Home} from './home'
import {Contact} from './Contact'
import {Aboutus} from './Aboutus'



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Aboutus">About us</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/Contact" element = {<Contact />}></Route>
        <Route path = "/Aboutus" element = {<Aboutus />}></Route>
        </Routes>
    </div>
  );
}

export default App;