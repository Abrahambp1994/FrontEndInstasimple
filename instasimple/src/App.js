import './App.css';
import { Routes, Route } from "react-router-dom";
import { PublicFeed } from './pages/PublicFeed';
import {Header} from "./components/Header"
import { LoginUser } from './pages/LoginUser';
import { RegisterUser } from './pages/RegisterUser';
import { UploadPost } from './pages/UploadPost';
import { UserProfile } from './pages/UserProfile';
import { FilterResults } from './pages/FilterResults';
import {NotFound} from "./pages/NotFound"
import { ControlPanel } from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PublicFeed />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/posts" element={<UploadPost />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/posts?description=" element={<FilterResults />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
     <ControlPanel />
    </div>
  );
}

export default App;
