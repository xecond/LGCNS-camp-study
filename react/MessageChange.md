## Say.js
```js
import { useState } from "react";

function Say() {
    // useState()를 이용하여 state 변수와 세터 함수 만들기
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("black");
    // 리턴 함수
    return (
        <>
            <h1 style={{color}}>{message}</h1>
            <button onClick={() => setMessage("입장합니다.")}>입장</button>
            <button onClick={() => setMessage("퇴장합니다.")}>퇴장</button>
            <button onClick={() => setColor("red")}>빨강</button>
            <button onClick={() => setColor("green")}>초록</button>
            <button onClick={() => setColor("blue")}>파랑</button>
        </>
    );
}
export default Say;
```

<br>

## App.js
```js
import { Component } from "react";
import Say from "./Say";

class App extends Component {
  render() {
    return (
      <>
        <Say />
      </>
    );
  }
}

export default App;
```
