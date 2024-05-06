import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

import RegisterPage from "./Crud/RegisterPage";
import LoginPage from "./Crud/LoginPage";
import Content from "./Components/Content.jsx";
import Nosotros from "./Components/Nosotros.jsx";
import Soporte from "./Components/Soporte.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import Dashboard from './Components/Dashboard.jsx'

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<div>
              <Nav />
              <Content />
              <Nosotros />
              <Soporte />
              <Footer />
            </div>}
          >
          </Route>
          <Route
            path="/register"
            element={<RegisterPage />}>
          </Route>
          <Route
            path="/login"
            element={<LoginPage />}>
          </Route>
          <Route
            path="/dashboard"
            element={<Dashboard />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App