import './App.css';
import ProfilePicture from "./profile_picture";
import Chat from "./chat";
import Response from "./response";

function App() {
  document.title = "Manifest";
  return (
    <div className="chatbox">
      <div className="header">
        <div><b>Manifest</b></div>
      </div>
      <div className="body">
        <ProfilePicture />
        <Chat />
      </div>
      <div className="response-area">
        <Response choices={["Test1", "test2"]}/>
      </div>
    </div>
  );
}

export default App;
