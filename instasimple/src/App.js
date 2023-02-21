import './App.css'

import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";

import { PublicFeed } from './pages/PublicFeed/PublicFeed';
import { FilterResults } from './pages/FilterResults/FilterResults';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { LoginPage } from './pages/LoginPage/LoginPage';

import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Header />

        <Routes>
          <Route path="/" element={ <PublicFeed /> } />
          <Route path="/posts" element={ <FilterResults /> } />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

     <Footer />

    </div>
  );
}

export default App;
