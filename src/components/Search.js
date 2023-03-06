import Styles from '../style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markTodoCompleted } from '../redux/actions';

const  Search = ({todoItem}) => {
    const todoList = useSelector((state) => state.todoReducer.activeList);
    const completedList = useSelector((state) => state.todoReducer.completedList);
    const dispatch = useDispatch();

    /**
     * Delete the task from the completed list
     * @param {object} item -task which needs to be deleted
     */
    const  deleteItem = (item) =>{
        dispatch(deleteTodo(item.id));
    }

    const completeTask = (todo) =>{
        dispatch(markTodoCompleted(todo));
    }
    
    return (
        <div className = {Styles.Display}>
            {todoList.filter(fItem => fItem.text.toLowerCase().includes(todoItem.text.toLowerCase()) ).map((item)=>(
                <div key={item.id} className = {Styles.listTile} >
                    <div>
                    <input className={Styles.listTileItem} type="checkbox" onClick= {() => completeTask(item)}></input>
                    <div className={Styles.listTileItem}>{item.text}</div>
                    </div>
                </div>
            ))}
            {completedList.filter(fItem => fItem.text.toLowerCase().includes(todoItem.text.toLowerCase())).map((todoItem)=>(
                <div key={todoItem.id} className = {Styles.listTile} >
                    < div className={Styles.listTileItem}> &nbsp;&nbsp;&nbsp;&nbsp;{todoItem.text}</div>
                    <button className={Styles.deleteButton} onClick={()=>deleteItem(todoItem)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            ))}
            </div>
    );
}

export default Search;