import { Route, Routes } from "react-router-dom"
import ContentPage from "./contentPage/ContentPage"
import AuthPage from "./authPage/AuthPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App
