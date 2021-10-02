import "./App.css";
import Board from "./Components/Board/Board";
import Text from "./Components/Text/Text";

function App() {
  return (
    <>
      <div className="header">
        <Text value="TASKS" />
      </div>
      <Board />
    </>
  );
}

export default App;
