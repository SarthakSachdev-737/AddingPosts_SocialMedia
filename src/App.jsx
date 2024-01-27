import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import PostItems from "./components/PostItems";
import CreatePost from "./components/createpost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import SocialMediaContextProvider from "./store/socialMediaStore";

function App() {
  let [SelectedTab, SetSelectedTab] = useState("Home");

  return (
    <SocialMediaContextProvider>
      <div className="SocialMediaContainer">
        <Sidebar
          SelectedTab={SelectedTab}
          SetSelectedTab={SetSelectedTab}
        ></Sidebar>
        <div className="HFContainer">
          <Header></Header>
          {SelectedTab === "Home" ?  <PostItems/> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
      </SocialMediaContextProvider>
  )
}

export default App;
