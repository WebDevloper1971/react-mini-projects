import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import LoginSignup from "./pages/LoginSignup";
import PasswordValidator from "./pages/PasswordValidator";
import TodoApp from "./pages/TodoApp";
import BmiCalculator from "./pages/BmiCalculator";
import ColorGenerator from "./pages/ColorGenerator";
import CurrencyConverter from "./pages/CurrencyConverter";
import Carousel from "./pages/Carousel";
import OTPvalidation from "./pages/OTPvalidation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {[
            { path: "/losin", element: <LoginSignup /> },
            { path: "/psv", element: <PasswordValidator /> },
            { path: "/todo", element: <TodoApp /> },
            { path: "/bmi", element: <BmiCalculator /> },
            { path: "/cg", element: <ColorGenerator /> },
            { path: "/curConv", element: <CurrencyConverter /> },
            { path: "/carousel", element: <Carousel /> },
            { path: "/otp", element: <OTPvalidation /> },
          ].map((r, index) => (
            <Route key={index} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
