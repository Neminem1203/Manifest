import './App.css';
import ProfilePicture from "./profile_picture";

function App() {
  document.title = "Manifest";
  return (
    <div className="chatbox">
      <div className="header">
        <div><b>Manifest</b></div>
      </div>
      <div className="body">
        <ProfilePicture />
      </div>
      <div className="response-area">
        <div className="response">Response1</div>
        <div className="response">Response2</div>
      </div>
    </div>
  );
}

export default App;
