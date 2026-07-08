import { BrowserRouter, Routes, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginPage from "./features/auth/pages/LoginPage/LoginPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;