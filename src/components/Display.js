import ActiveDisplay from "./ActiveDisplay";
import CompletedTaskDisplay from "./CompletedTasksDisplay";
import Search from "./Search";
import { useSelector } from "react-redux";

const Display = ({ todoItem }) => {

  const activeDisplayNumber = useSelector(
    (state) => state.todoReducer.activeDisplayNumber
  );

  if (activeDisplayNumber === 0) {
    return (
      <div>
        <ActiveDisplay></ActiveDisplay>
        <CompletedTaskDisplay></CompletedTaskDisplay>
      </div>
    );
  }
   else if (activeDisplayNumber === 1)
    {
    return <ActiveDisplay></ActiveDisplay>;
  }
   else if (activeDisplayNumber === 2) 
   {
    return <CompletedTaskDisplay></CompletedTaskDisplay>;
  }
   else 
   {
    return <Search todoItem={todoItem}></Search>;
  }
};

export default Display;
