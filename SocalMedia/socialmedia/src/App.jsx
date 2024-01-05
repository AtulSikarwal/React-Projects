import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar selectTab={selectTab} setSelectTab={setSelectTab} />
      <div className="content">
        <Header />
        {selectTab === "Home" ? <PostList /> : <CreatePost />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
