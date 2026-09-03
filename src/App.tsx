import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
