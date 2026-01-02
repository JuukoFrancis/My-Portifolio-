// import { Home } from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";

// 18.00

const App = () => {
  return (
    <>
      <ToastContainer />
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
