import Styles from '../style.module.css'

const TodoInput = ({todoItem,setTodoItem})=>{

    /**
     * Used to add new task to the list
     */
    const handleChange = (event) =>{
        const obj = {
            id: event.id,
            text: event.target.value,
        }
        setTodoItem(obj);
    }
    
    return (
        <div className = {Styles.inputDiv}>
            <input className = {Styles.input} type="text" value={todoItem.text} onChange={handleChange} placeholder="Add New"/>
        </div>
    );
}

export default TodoInput