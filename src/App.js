import "./App.css";
import Board from "./Components/Board/Board";
import Text from "./Components/Text/Text";

function App() {
  return (
    <>
      <div className="flexbox-container">
        <Text className="flexbox-item" value="TASKS" />
      </div>
      <div className="base">
        <Board />
      </div>
    </>
  );
}

export default App;
