// React and ohter dependencies import
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Contexts
import { AppContext } from "./Components/AppContext";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portifolio from "./Pages/Portifolio";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";

// Components
import Container from "./Components/Container";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route index path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portifolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
