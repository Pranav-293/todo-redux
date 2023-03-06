import Styles from "../style.module.css";
import { useSelector } from "react-redux";


const Header = () => {

    const activeDisplayNumber = useSelector((state) => state.todoReducer.activeDisplayNumber);

    if(activeDisplayNumber===0){
        return(
            <div className = {Styles.Header}>
                <h1 className={Styles.Heading}>ALL TASKS</h1>
            </div>
        );
    }
    else if(activeDisplayNumber===1){
        return(
            <div className = {Styles.Header}>
                <h1 className={Styles.Heading}>ACTIVE TASKS</h1>
            </div>
        );
    }
    else if(activeDisplayNumber===2){
        return (
            <div className = {Styles.Header}>
            <h1 className={Styles.Heading}>COMPLETED TASKS</h1>
        </div>
        );
    }
    return(
        <div className = {Styles.Header}>
            <h1 className={Styles.Heading}>SEARCH</h1>
        </div>
    );
}

export default Header