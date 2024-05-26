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
import DashboardNotes from "./Components/DashboardNotes.jsx";
import DashboardBalance from "./Components/DashboardBalance.jsx";
import ProfilePage from "./Components/ProfilePage.jsx";
import NotePage from "./Components/NotePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { NoteProvider } from "./Context/NotesContext.jsx";
import Ajustes from "./Components/Ajustes.jsx";
import ForgotPass from "./Crud/ForgotPassword.jsx";
import EmailConfirm from "./Crud/EmailConfirm.jsx";

function App() {
  return (

    <AuthProvider>
      <NoteProvider>
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
              path="/forgotpass"
              element={<ForgotPass />}>
            </Route>
            <Route
              path="/confirmEmail"
              element={<EmailConfirm />}>
            </Route>
            <Route
              path="/register"
              element={<RegisterPage />}>
            </Route>
            <Route
              path="/login"
              element={<LoginPage />}>
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<Dashboard />}>
              </Route>
              <Route
                path="/notes"
                element={<DashboardNotes />}>
              </Route>
              <Route
                path="/add-notes"
                element={<NotePage />}>
              </Route>
              <Route
                path="/notes/:id"
                element={<NotePage />}>
              </Route>
              <Route
                path="/balance"
                element={<DashboardBalance />}>
              </Route>
              <Route
                path="/profile"
                element={<ProfilePage />}>
              </Route>
              <Route
                path="/ajustes"
                element={<Ajustes />}>
              </Route>

            </Route>

          </Routes>
        </BrowserRouter>
      </NoteProvider>
    </AuthProvider>

  )
}

export default App