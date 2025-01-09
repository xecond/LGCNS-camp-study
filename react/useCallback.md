## App.js
```js
import { useState, memo } from "react"
import "./App.css";

// React.memo()로 컴포넌트를 래핑하면, 
// 리액트를 컴포넌트를 렌더링하고 그 결과를 메모이징(Memoizing)해
// 다음 렌더링이 일어날 때 props가 같으면 메모이징된 내용을 재사용
const Todos = memo(({ todos, addTodo }) => {
  console.log(addTodo);
  console.log("Child component is rendering...");
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <h2>Todos</h2>
      {todos.map((todo, index) => <p key={index}>{todo}</p>)}
    </div>
  );
});

export default function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => setCount(count + 1);

  // addTodo 함수의 내용이 변경되지 않았음에도 불구하고, <Todos> 컴포넌트를 리렌더링 함 
  // Todos 컴포넌트에 addTodo props만 남겨두고, todos props를 제거해서 확인해 볼 수 있음
  /* const addTodo = () => {
    setTodos([...todos, "할일"]);
  }; */

  // useCallback을 이용해서 props 변수로 전달되는 함수가 매번 재정되지 않도록 수정
  const addTodo = useCallback(() => {
    setTodos([...todos, "할일"]);
  }, [todos]);

  return(
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <button onClick={increment}>카운트 증가</button>
        <h2>Count: {count}</h2>
      </div>
    </>
  );

}
```
