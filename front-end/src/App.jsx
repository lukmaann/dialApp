import MenuBar from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LogPage from "./pages/logPage";
import ContactPage from "./pages/contactPage";
import HeaderBar from "./components/header";
import CallPage from "./pages/callPage";

const App = () => {
  return (
    <BrowserRouter>
        <div className="appDiv">
          <div className="screen">
            <HeaderBar/>
      <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/log" element={<LogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/call" element={<CallPage />}/>


      </Routes>
            <MenuBar />
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
