# 입력한 숫자 등록
## Average.js
```js
import React, { useMemo, useRef, useState } from "react";

function Average() {
    const [number, setNumber] = useState("");
    const [list, setList] = useState([])

    const changeNumber = e => setNumber(e.target.value);
    const changeList = () => {
        const newList = list.concat(Number(number));
        setList(newList);

        setNumber("");
        refNumber.current.focus();
    };

    const refNumber = useRef();
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <>
            <div>
                <input ref={refNumber} type="number" value={number} onChange={changeNumber} />
                <button onClick={changeList}>등록</button>
            </div>
            <div>
                <p>입력값: {number}</p>
            </div>
            <div>
                등록된 숫자
                <ul>
                    {
                        list.map((n, i) => <li key={i}>{n}</li>)
                    }
                </ul>
            </div>
        </>
    );
}

export default Average;
```

<br>

## App.js

```js
import Average from "./Average"

export default () => {
  return <Average />;
};
```

<br>
<hr>

# 예시1 - 렌더링 횟수 출력 
## App.js
```js
import { useEffect, useRef, useState } from "react";

const ChangeCountWithLocalVariable = () => {
  const [message, setMessage] = useState("");

  let count = 0;
  console.log("#1", { message, count });

  // 의존성 배열을 정의하지 않았기 때문에 마운트될 때와 업데이트될 때 이펙트 함수가 실행
  useEffect(() => {
    console.log("렌더링되었습니다.")
    count++;
  });

  return (
    <>
      <h1>지역변수를 사용하는 경우</h1>
      <h2>렌더링 횟수: {count}</h2>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}

const ChangeCountWithStateVariable = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  console.log("#2", { message, count });

  useEffect(() => {
    console.log("렌더링되었습니다.")
    setCount(count + 1);
  });

  return (
    <>
      <h1>상태변수를 사용하는 경우</h1>
      <h2>렌더링 횟수: {count}</h2>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}

const ChangeCountWithRefVariable = () => {
  const [message, setMessage] = useState("");
  const count = useRef(0);

  console.log("#3", { message, count: count.current });

  useEffect(() => {
    console.log("렌더링되었습니다.")
    count.current++;
  });

  return (
    <>
      <h1>Ref 변수를 사용하는 경우</h1>
      <h2>렌더링 횟수: {count.current}</h2>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );

}

export default () => {
  return (
    <>
      <ChangeCountWithLocalVariable />
      <ChangeCountWithStateVariable />
      <ChangeCountWithRefVariable />
    </>
  );
};
```

<br>
<hr>

# 예제2 - 타이머 조작
## App.js
```js
import "./App.css";
import { useState, useRef } from "react";

const CounterWithLocalVariable = () => {
  const [count, setCount] = useState(0);
  let intervalId = 0;
  console.log(`렌더링... count: ${count}, intervalId: ${intervalId}`);

  const startCounter = () => {
    intervalId = setInterval(() => { setCount(count => count + 1) }, 1000);
    console.log(`카운터 시작... intervalId: ${intervalId}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
    console.log(`카운터 정지... intervalId: ${intervalId}`);
  };

  return (
    <>
      <p>카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
};

const CounterWithStateVariable = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setInterId] = useState(0);

  console.log(`렌더링... count: ${count}, intervalId: ${intervalId}`);

  const startCounter = () => {
    const id = setInterval(() => { setCount(count => count + 1) }, 1000);
    setInterId(id);
    console.log(`카운터 시작... intervalId: ${intervalId}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
    console.log(`카운터 정지... intervalId: ${intervalId}`);
  };

  return (
    <>
      <p>카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
};

const CounterWithRefVariable = () => {
  const [count, setCount] = useState(0);
  const intervalId = useRef(0);

  console.log(`렌더링... count: ${count}, intervalId: ${intervalId.current}`);

  const startCounter = () => {
    intervalId.current = setInterval(() => { setCount(count => count + 1) }, 1000);
    console.log(`카운터 시작... intervalId: ${intervalId.current}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId.current);
    console.log(`카운터 정지... intervalId: ${intervalId.current}`);
  };

  return (
    <>
      <p>카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
};

export default () => {
  return (
    <>
      <CounterWithLocalVariable />
      <CounterWithStateVariable />
      <CounterWithRefVariable />
    </>
  );
};
```
