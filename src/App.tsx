import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { News } from "./components/News/News";
import { Books } from "./components/Books/Books";
import { Settings } from "./components/Settings/Settings";
import { Todolist } from "./components/Todolist/Todolist";
import { EnglishCard } from "./components/EnglishCard/EnglishCard";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/news" element={<News />} />
          <Route path="/books" element={<Books />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/englishCard" element={<EnglishCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
