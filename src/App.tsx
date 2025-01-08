import { Route, Routes } from "react-router-dom"
import ContentPage from "./components/contentPage/ContentPage"
import AuthPage from "./components/authPage/AuthPage";
import ResetEmail from "./components/authPage/ResetEmail";
import ResetCode from "./components/authPage/ResetCode";
import ChangePassword from "./components/authPage/ChangePassword";
import Layout from "./components/coursePage/Layout";
import TariffPage from "./components/coursePage/TariffPage";
import MaterialPage from "./components/coursePage/MaterialPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/auth/email" element={<ResetEmail />} />
      <Route path="/auth/code" element={<ResetCode />} />
      <Route path="/auth/password" element={<ChangePassword />} />
      <Route path="/course" element={<Layout />}>
        <Route path="tariff" element={<TariffPage />}/>
        <Route path="content" element={<MaterialPage />}/>
      </Route>
    </Routes>
  );
}

export default App
