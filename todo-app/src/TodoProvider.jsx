import { useRef, useState } from 'react';
import TodoContext from "./TodoContext";

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState([
        {id:1, checked: true, text: "자바스크립트 공부하기"},
        {id:2, checked: false, text: "리액트 공부하기"},
        {id:3, checked: false, text: "투두 앱 만들기"},
    ]);

    const nextId = useRef(4);

    const insertTodo = text => {
        const newTodos = todos.concat({id: nextId.current, checked: false, text });
        setTodos(newTodos);
        nextId.current++;
    }

    const removeTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const toggleTodo = id => {
        const newTodos = todos.map(todo => todo.id == id ? {...todo, checked: !todo.checked} : todo);
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{todos, insertTodo, removeTodo, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    );
    
}