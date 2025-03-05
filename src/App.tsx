import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import './styles/main.scss'

function App() {
  return (
    <>
      <Navigation/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
