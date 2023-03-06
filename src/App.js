import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Footer from "./components/Footer";
import Styles from "./style.module.css";
import { useState } from "react";
import Display from "./components/Display";

function App() {

  const [todoItem, setTodoItem] = useState({ id: "", text: "" });     // State of input field

  return (
    <div className={Styles.container}>

    {/** Header shows the heading of the current display at the top */}
    <Header></Header>

    {/** Input field for adding task */}
    <TodoInput todoItem={todoItem} setTodoItem={setTodoItem}></TodoInput>

    {/** Display shows the list of tasks */}
    <Display
      todoItem={todoItem}
    ></Display>

    {/** Footer contains buttons to add task, to search any task, and to see active and completed tasks */}
    <Footer
      todoItem={todoItem}
      setTodoItem={setTodoItem}
    ></Footer>
  </div>
  );
}

export default App;
