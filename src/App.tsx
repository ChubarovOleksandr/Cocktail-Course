import { Route, Routes } from "react-router-dom"
import ContentPage from "./contentPage/ContentPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<ContentPage />} />
    </Routes>
  );
}

export default App
