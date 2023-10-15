import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/homePage";
import Login from "./component/loginPage";
import Register from "./component/registerPage";
import Fof from "./component/404page";
import Shope from "./component/shopePage";
import Photoghraphy  from "./component/photoghraphyPage";
import DonationPage from "./component/donationPage";
import CreateCard from "./component/createCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Fof />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Donation" element={<DonationPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Shope" element={<Shope />}></Route>
          <Route path="/CreatePage" element={<CreateCard/>}></Route>
          <Route path="/photoghraphy" element={<Photoghraphy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
