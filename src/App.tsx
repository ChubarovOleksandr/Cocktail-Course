import { Route, Routes } from "react-router-dom";
import ContentPage from "./components/contentPage/ContentPage";
import AuthPage from "./components/authPage/AuthPage";
import ResetEmail from "./components/authPage/ResetEmail";
import ResetCode from "./components/authPage/ResetCode";
import ChangePassword from "./components/authPage/ChangePassword";
import Layout from "./components/coursePage/Layout";
import TariffPage from "./components/coursePage/TariffPage";
import MaterialPage from "./components/coursePage/MaterialPage";
import OfertaPage from "./components/ofertaPage/OfertaPage";
import { AdminPage } from "./components/adminPage/AdminPage";
import { UserDetailPage } from "./components/adminPage/UserDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/users" element={<UserDetailPage />} />
      <Route path="/oferta" element={<OfertaPage />} />
      <Route path="/auth/email" element={<ResetEmail />} />
      <Route path="/auth/code" element={<ResetCode />} />
      <Route path="/auth/password" element={<ChangePassword />} />
      <Route path="/course" element={<Layout />}>
        <Route path="tariff" element={<TariffPage />} />
        <Route path="content" element={<MaterialPage />} />
      </Route>
    </Routes>
  );
}

export default App;
