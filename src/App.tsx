import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import "./styles/main.scss";
import { Toast } from "./components/Toast/Toast";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
        <Toast />
      </main>
      <Footer />
    </>
  );
}

export default App;
