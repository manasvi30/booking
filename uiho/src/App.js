import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Berlin from "./pages/berlin/Berlin";
import Madrid from "./pages/Madrid/Madrid";
import London from "./pages/london/London";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/berlin" element={<Berlin/>}/>
        <Route path="/madrid" element={<Madrid/>}/>
        <Route path="/london" element={<London/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;