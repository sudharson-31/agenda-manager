import { useState } from "react";
import ViewAgenda from "./components/ViewAgenda";
import AddAgenda from "./components/AddAgenda";
import data from "./components/data";
import app from "./app.css"

function App() {
  let [currentView,setCurrentView] = useState(0);
  function changeView(){
    setCurrentView(prevState =>{
      prevState = !prevState;
      return prevState;
    })
  }
  return (
    <div className="App">
      <div id="viewer-container">
        <button id="viewer-button" onClick={changeView}>
          Click to {data[Number(!currentView)]} Agenda
        </button>
      </div>
      <div className="view">
          {currentView? <AddAgenda />: <ViewAgenda />}
      </div>
        
    </div>
  );
}

export default App;
