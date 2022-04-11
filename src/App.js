import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import AppModal from "./components/AppModal";

function App() {
  return (
    <div className="App">
      <Folder explorer={explorer} />
      <br />
      <br />
      <AppModal />
    </div>
  );
}

export default App;
