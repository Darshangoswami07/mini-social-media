import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/PostList.jsx";
import PostListProvider from "./store/post-list-store.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <PostListProvider>
    <div className="app-conatiner">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />
        {selectedTab === "home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
