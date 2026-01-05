// import { Home } from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./context/ThemeContext";
// 18.00

const App = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <ToastContainer theme={isDarkMode ? "dark" : "light"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
