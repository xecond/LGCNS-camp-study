import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import "./TodoListItem.css";
import { useContext } from "react";
import TodoContext from "../TodoContext";

export default ({todo}) => {
    const {removeTodo, toggleTodo} = useContext(TodoContext);

    const {id, checked, text} = todo;
    return (
        <div className="TodoListItem">
            <div className={checked ? "checkBox checked" : "checkBox"} onClick={() => toggleTodo(id)}>
                {
                    checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                <div class="text">{text}</div>
            </div>
            <div className="remove" onClick={() => removeTodo(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}