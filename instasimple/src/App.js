import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PublicFeed } from "./pages/PublicFeed";
import { Header } from "./components/Header";
import { UserProfile } from "./pages/UserProfile";
import { NotFound } from "./pages/NotFound";
import { ControlPanel } from "./components/ControlPanel";
import Modal from "./components/Modal/Modal";
import { useModal } from "./context/ModalContext";
import { useState } from "react";

function App() {
  const [modal] = useModal();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="App">
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header />
        <Routes>
          <Route path="/" element={<PublicFeed />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {modal && <Modal>{modal}</Modal>}
        <ControlPanel />
        <label class="switcher">
          <input type="checkbox" onClick={toggleDarkMode} />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
