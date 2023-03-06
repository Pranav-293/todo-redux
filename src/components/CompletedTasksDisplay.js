import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Styles from "../style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from '../redux/actions';

const CompletedTaskDisplay = () =>{

    const completedList = useSelector ((state) => state.todoReducer.completedList);
    const dispatch = useDispatch();
    
    /**
     * Delete the task from the completed list
     * @param {object} item -task which needs to be deleted
     */
    const  deleteItem = (item) =>{
        dispatch(deleteTodo(item.id))
    }


    return(
        <div className={Styles.Display}>
            <div>
             {completedList.map((item) => {
                return (
                    <div key={item.id} className={Styles.listTile}>
                        <div className={Styles.listTileItem}>
                          {item.text}
                        </div>
                    <button className={Styles.deleteButton} onClick = {() => deleteItem(item)} ><FontAwesomeIcon icon={faTrash}/></button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default CompletedTaskDisplay;