import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/homePage";
import Login from "./component/login";
import Register from "./component/register";
import Fof from "./component/404page";
import Gallary from "./component/gallary";
import Photoghraphy  from "./component/photoghraphy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Fof />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/gallary" element={<Gallary />}></Route>
          <Route path="/photoghraphy" element={<Photoghraphy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
