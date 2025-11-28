// import { Home } from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NotFound />} /> */}

          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
