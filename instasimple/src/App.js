import './App.css';
import { Routes, Route } from "react-router-dom";
import { PublicFeed } from './pages/PublicFeed';
import {Header} from "./components/Header"
import { UserProfile } from './pages/UserProfile';
import { FilterResults } from './pages/FilterResults';
import {NotFound} from "./pages/NotFound"
import { ControlPanel } from './components/ControlPanel';
import Modal from './components/Modal/Modal';
import { useModal } from './context/ModalContext';

function App() {
  const [modal] = useModal();
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<PublicFeed />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/posts?description=" element={<FilterResults />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
     {modal && <Modal>{modal}</Modal>}
     <ControlPanel />
    </div>
  );
}

export default App;
