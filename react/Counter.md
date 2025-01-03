## Counter.js
```js
import {Component} from "react";

class Counter extends Component {
    // state 변수
    state = {
        number: 0,
        fixedNumber: 10
    };
    // 렌더 함수
    render() {
        // 객체 비구조화
        const { number, fixedNumber } = this.state;
        // 리턴 함수
        return (
            <>
                <h1>변하는 수: {number}</h1>
                <button onClick={() => this.setState({number: number+1})}>+1</button>
                <button onClick={() => {
                    this.setState(prevState => ({number: prevState.number+1}));
                    this.setState(prevState => ({number: prevState.number+1}));
                    this.setState(prevState => ({number: prevState.number+1}));
                    }
                }>+3</button>
                <button onClick={() => this.setState({number: number+1}, () => console.log("콜백 함수 호출됨"))}>+1 (콜백 실험용)</button>
                <h1>고정된 수: {fixedNumber}</h1>
            </>
        );
    }
}

export default Counter;
```

<br>

## App.js
```js
import { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}

export default App;
```
