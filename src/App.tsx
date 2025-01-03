import { Route, Routes } from "react-router-dom"
import ContentPage from "./components/contentPage/ContentPage"
import AuthPage from "./components/authPage/AuthPage";
import ResetEmail from "./components/authPage/ResetEmail";
import ResetCode from "./components/authPage/ResetCode";
import ChangePassword from "./components/authPage/ChangePassword";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/email" element={<ResetEmail />} />
      <Route path="/auth/code" element={<ResetCode />} />
      <Route path="/auth/password" element={<ChangePassword />} />
    </Routes>
  );
}

export default App
