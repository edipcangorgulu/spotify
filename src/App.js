import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";
import BottomBar from "components/BottomBar";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      <BottomBar />
    </Router>
  );
}

export default App;
