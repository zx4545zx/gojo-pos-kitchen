import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/layout/NavBar'
import SideBar from "./components/layout/SideBar";
import Home from "./views/home/Home";
import Display from "./views/display/Display";
import Setting from "./views/setting/Setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-full bg-base-200 ">
          <NavBar />
          <div className="flex h-[90dvh]">
            <SideBar />
            <div className="w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/display" element={<Display />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
