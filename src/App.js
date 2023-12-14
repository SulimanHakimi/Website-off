import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/homePage";
import Login from "./component/login/loginPage";
import Register from "./component/login/registerPage";
import Fof from "./component/404page";
import Shope from "./component/shopePage";
import Photoghraphy from "./component/photoghraphyPage";
import DonationPage from "./component/donationPage";
import CreateCard from "./component/editpages/createCard";
import LoginFigma from "./component/login/loginFigma";
import { createContext, useState } from "react";
import EditPage from "./component/editpages/editPage";
function App() {

  return (
    <>
      <AppContext.Provider value={{ isLogin, setIsLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Fof />}></Route>
            <Route path="/editPage" element={<EditPage />}></Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Donation" element={<DonationPage />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Shope" element={<Shope />}></Route>
            <Route path="/LoginFigma" element={<LoginFigma />}></Route>
            <Route path="/CreatePage" element={<CreateCard />}></Route>
            <Route path="/photoghraphy" element={<Photoghraphy />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
