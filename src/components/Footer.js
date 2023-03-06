import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import uniqid from 'uniqid'
import Styles from '../style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, changeDisplay } from '../redux/actions'

const Footer = ({todoItem, setTodoItem}) =>{

    const dispatch = useDispatch();
    const activeDisplayNumber = useSelector((state) => state.todoReducer.activeDisplayNumber);
    const todoList = useSelector((state) => state.todoReducer.activeList);

    /**
     * Create a new task and add it to active list
     */
    const addNewTask = () =>{
        const obj = {
            id: uniqid(),
            text : todoItem.text,
        }
        if(obj.text==="") return;
        dispatch(addNewTodo(obj));
        const newObj = {
            id: "",
            text: "",
        }
        setTodoItem(newObj);
    }

    /**
     * show searched tasks
     */
    const search = () =>{
        dispatch(changeDisplay(3));
    }

    /**
     * show completed tasks
     */
    const changeDisplayToCompleted = () =>{
        dispatch(changeDisplay(2));
    }

    /**
     * show all tasks
     */
    const changeDisplayToAll = () =>{
        dispatch(changeDisplay(0));
    }

    /**
     * show active tasks
     */
    const changeDisplayToActive = () =>{
        dispatch(changeDisplay(1));
    }

    return (
        <div className={Styles.footer}>
            <div className={Styles.footerLeftButtons}>
                <button className = {Styles.footerDisplayButton} onClick={addNewTask}><FontAwesomeIcon icon={faAdd} style = {{color:'black'}}></FontAwesomeIcon></button>
                <button className = {(activeDisplayNumber===3)?Styles.footerDisplayButtonCurrent: Styles.footerDisplayButton } onClick={search}><FontAwesomeIcon icon={faSearch}/></button>
                <div className= {Styles.footerDisplayButton}>&nbsp; | &nbsp; {todoList.length} items left</div> 
            </div>
            <div className={Styles.footerRightButtons}>
                <button className= {(activeDisplayNumber===0)?Styles.footerDisplayButtonCurrent: Styles.footerDisplayButton } onClick={changeDisplayToAll}>All</button>
                <button className = {(activeDisplayNumber===1)?Styles.footerDisplayButtonCurrent: Styles.footerDisplayButton}  onClick={changeDisplayToActive}>Active</button>
                <button className = {(activeDisplayNumber===2)?Styles.footerDisplayButtonCurrent: Styles.footerDisplayButton} onClick={changeDisplayToCompleted}>Completed</button>
            </div>
        </div>
    );
}

export default Footer;