## App.js
useReducer를 이용해서 여러 상태 변수를 관리하던 것을 사용자 정의 훅으로 대체 
```js
import { useReducer, useState } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

// 상태변수와 상태변수의 값을 변경하는 핸들러 함수를 반환하는 useInputs 사용자 정의 훅 함수를 생성
function useInputs(initState) {
  const [state, dispatch] = useReducer(reducer, initState);
  const handlerChange = e => {
    dispatch(e.target);
  };
  return [state, handlerChange];
}

function Info() {
  /*
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  const handlerChange = (e) => {
    dispatch(e.target);
  };
  */

  const [state, handlerChange] = useInputs({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <>
      <div>
        <p>이름: {name}</p>
        <p>별명: {nickname}</p>
      </div>
      <div>
        <p>이름: <input type="text" value={name} name="name" onChange={handlerChange} /></p>
        <p>별명: <input type="text" value={nickname} name="nickname" onChange={handlerChange} /></p>
      </div>
    </>
  );
}

const App = () => {
  return (
    <>
      <Info />
    </>
  );
};

export default App;

```
