import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CContainer } from "@coreui/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppContext from "./contexts/AppContext";
import Routes from "./routes";
import Footer from "./components/Footer";

function App() {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <AppContext.Provider value={{ sidebarShow, setSidebarShow }}>
      <BrowserRouter>
        <Header />

        <div className="wrapper d-flex flex-row min-vh-100 bg-light">
          <Sidebar />

          <CContainer lg>
            <Routes />
          </CContainer>
        </div>

        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
