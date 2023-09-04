//libraries
import { BrowserRouter } from "react-router-dom";

//components
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { Header, Footer } from "./components";
import { Home, About, Projects, Skills, Contact } from "./pages";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </BrowserRouter>
      {/* <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter> */}
    </div>
  );
};

export default App;
