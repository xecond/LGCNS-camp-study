## App.js
```js
import { useState } from "react";

function Title(props) {
  return(
    <>
      <p>현재 카운트는 {props.title}입니다.</p>
    </>
  );
}

function Todo() {
  const [title, setTitle] = useState(0);
  return(
    <>
      <Title title={title}/>
      <button onClick={() => setTitle(title+1)}>증가</button>
    </>
  );
}

function App() {
  return (
    <Todo />
  );
}

export default App;
```
