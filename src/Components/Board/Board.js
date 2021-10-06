import "./Board.css";
import Group from "../Group/Group";

const Board = (props) => {
  let listItems = Array(3).fill(null);
  let isLast = false;

  return (
    <div className="main">
      {listItems.length > 0 &&
        listItems.map((item, key) => {
          if (listItems.length - 1 === key) {
            isLast = true;
          }

          return <Group key={key} isLast={isLast} />;
        })}
    </div>
  );
};

export default Board;
