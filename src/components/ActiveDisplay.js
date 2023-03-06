import Styles from '../style.module.css'
import { useDispatch, useSelector } from "react-redux";
import { markTodoCompleted } from '../redux/actions';
const ActiveDisplay = () =>{

    const todoList = useSelector ((state) => state.todoReducer.activeList);
    const dispatch = useDispatch();

    /**
     * function to move the task from active list to completed list
     * @param {object} todo -the task which is completed
     */
    const completeTask = (todo) =>{
        dispatch(markTodoCompleted(todo));
    }
    

    return (
        <div className = {Styles.Display}>
            {todoList.map((todoItem)=>(
                <div key={todoItem.id} className = {Styles.listTile} >
                    <div>
                    <input className={Styles.listTileItem} type="checkbox" onClick= {() => completeTask(todoItem)}></input>
                    <div className={Styles.listTileItem}>{todoItem.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ActiveDisplay;