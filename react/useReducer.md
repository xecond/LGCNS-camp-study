# 하나 더하기와 하나 빼기
## App.js
```js
import "./App.css";
import { useReducer, useState } from "react";

// state: 현재 상태 변수의 값
// action: 상태 변수 변경에 필요한 조건과 값 (호출 시 전달되는 값)
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {

  /*
  const [count, setCount] = useState(0);
  const changeCountPlus = () => setCount(count + 1);
  const changeCountMinus = () => setCount(count - 1);
  */
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <>
      {/* <div>현재 카운터 값은 <b>{count}</b>입니다.</div>
      <div>
        <button onClick={changeCountPlus}>하나 더하기</button>
        <button onClick={changeCountMinus}>하나 빼기</button>
      </div> */}
      <div>현재 카운터 값은 <b>{state.count}</b>입니다.</div>
      <div>
        <button onClick={() => dispatch({type: "INCREMENT"})}>하나 더하기</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>하나 빼기</button>
      </div>
    </>
  );
};
export default () => <Counter />;
```

<br>
<hr>

# 여러 입력창 관리
## App.js
```js
import "./App.css";
import { useReducer, useState } from "react";

// action = { type: 변경할 상태변수, value: 변경할 값 }
// dispatch() 함수를 호출할 때 action 값을 설정해서 전달 
const reducer = (state, action) => {
  /* switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "nickName":
      return { ...state, nickName: action.value };
    default:
      return state;
  } */
  return { ...state, [action.type]: action.value };
};

const Info = () => {
  /*
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const changeName = e => setName(e.target.value);
  const changeNickName = e => setNickName(e.target.value);
  */
  const [state, dispatch] = useReducer(reducer, { name: "", nickName: "" });

  const changeValue = e => dispatch({ type: e.target.name, value: e.target.value });

  return (
    <>
      {/* <div>
        <p>이름: {name}</p>
        <p>별명: {nickName}</p>
      </div>
      <div>
        <p>이름: <input type="text" value={name} onChange={changeName} /></p>
        <p>별명: <input type="text" value={nickName} onChange={changeNickName} /></p>
      </div> */}
      <div>
        <p>이름: {state.name}</p>
        <p>별명: {state.nickName}</p>
      </div>
      <div>
        <p>이름: <input type="text" name="name" value={state.name} onChange={changeValue} /></p>
        <p>별명: <input type="text" name="nickName" value={state.nickName} onChange={changeValue} /></p>
      </div>
    </>
  );
};

export default () => <Info />;
```
