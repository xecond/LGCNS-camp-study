import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import TodoContext from "../TodoContext";
import { useContext } from "react";

export default function TodoList() {
    const { todos } = useContext(TodoContext);

    return (
        <div className="TodoList">
            {
                todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)
            }
        </div>
    );
}