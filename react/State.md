# state 내리기
## App.js
```js
import { useState } from "react";

function ChildA(props) {
  return (
    <p>{props.inputNum * 2}</p>
  );
}

function ChildB(props) {
  return (
    <p>{props.inputNum * 3}</p>
  );
}

function Parent() {
  // state 변수
  const [inputNum, changeInputNum] = useState(0);
  // 이벤트 핸들링 함수
  const handleChange = e => { changeInputNum(e.target.value); }
  // 리턴 함수
  return (
    <>
      <input type="number" value={inputNum} onChange={handleChange}></input>
      <ChildA inputNum={inputNum}/>
      <ChildB inputNum={inputNum}/>
    </>
  );
}

function App() {
  return (
    <Parent />
  );
}
export default App;
```

<br>

# state 끌어올리기
## App.js
```js
import { useState } from "react";

function Child(props) {
  // 이벤트 핸들링 함수
  const handlerAdd = props.increment;
  // 리턴 함수
  return (
    <button onClick={handlerAdd}>+1</button>
  );
}

function Parent() {
  // state 변수
  const [cnt, setCnt] = useState(0);
  // 이벤트 핸들링 함수 - 자식
  const increment = () => {setCnt(cnt+1)};
  // 리턴 함수
  return (
    <>
      <h1>{cnt}</h1>
      <Child increment={increment}/>
    </>
  );
}

function App() {
  return (
    <Parent />
  );
}
export default App;
```

<br>

# state 실습 1
## App.js
```js
import { useState } from "react";

function Child({increment, decrement}) {
  // 리턴 함수
  return(
    <>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}

function Parent() {
  // state 변수
  const [cnt, setCnt] = useState(0);
  // 이벤트 핸들링 함수 - 자식
  const increment = () => {setCnt(cnt+1)};
  const decrement = () => {setCnt(cnt-1)};
  // 이벤트 핸들링 함수
  const handleRestCnt = () => {setCnt(0)};
  // 리턴 함수
  return (
    <>
      <div>{cnt}</div>
      <button onClick={handleRestCnt}>Reset</button>
      <Child increment={increment} decrement={decrement}/>
    </>
  );
}

function App() {
  return (
    <Parent />
  );
}
export default App;
```

<br>

# state 실습 2
## App.js
```js
import { useState } from "react";

function Controller({increment, decrement}) {
  // 리턴 함수
  return(
    <>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}

function Display({cnt}) {
  return(
    <div>{cnt}</div>
  );
}

function Parent() {
  // state 변수
  const [cnt, setCnt] = useState(0);
  // 이벤트 핸들링 함수 - 자식
  const increment = () => {setCnt(cnt+1)};
  const decrement = () => {setCnt(cnt-1)};
  // 이벤트 핸들링 함수
  const handleRestCnt = () => {setCnt(0)};
  // 리턴 함수
  return (
    <>
      <button onClick={handleRestCnt}>Reset</button>
      <Controller increment={increment} decrement={decrement}/>
      <Display cnt={cnt}/>
    </>
  );
}

function App() {
  return (
    <Parent />
  );
}
export default App;
```
