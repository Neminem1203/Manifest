import './App.css';

function App() {
  document.title = "Manifest";
  return (
    <div className="chatbox">
      <div className="header">
        <div><b>Manifest</b></div>
      </div>
      <div className="body">
        <div className="profile-picture">
          <img src="./61.png" alt="Henry" style={{width: "100%"}}/>
          <div className="profile-picture-title">
            Henry
          </div>
          <div className="profile-picture-subtitle">
            Transfer Specialist
          </div>
        </div>
      </div>
      <div className="response-area">
        <div className="response">Response1</div>
        <div className="response">Response2</div>
      </div>
    </div>
  );
}

export default App;
