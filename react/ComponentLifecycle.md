## LifecycleSample.js
```js
import { Component } from "react";

class LifecycleSample extends Component {
    state = {
        count: 0,
        color: this.props.color
    };

    changeCount = e => {
        console.log("하나 증가 버튼 클릭!");
        this.setState({count: this.state.count+1});
    }

    /* 라이프사이클 메서드 */
    constructor(props) {
        super(props);
        console.log("constructor is called");
    }
    componentDidMount() {
        console.log("componentDidMount is called");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate is called");
        if (snapshot) {
            console.log(`업데이트 직전의 글자색: ${snapshot}`);
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount is called");
    }
    // 부모로부터 전달 받은 글자색을 상태변수로 설정하고 그 값을 화면에 표시할 수 있도록 수정
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps is called");

        if (state.color !== props.color) {
            return { color: props.color };
        }
        return null;
    }
    // 카운트가 짝수인 경우에만 리렌더링되도록 수정
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate is called");
        return nextState.count % 2 === 0
    }
    // 리렌더링 직전의 글자색을 로그로 출력하도록 수정
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate is called");

        if (prevProps.color !== this.props.color) {
            return prevProps.color;
        }
        return null;
    }

    render() {
        return (
            <>
                {/* this.state.missing.value */} {/* 정의되지 않은 state 변수를 참조 */}
                <h1>자식 컴포넌트</h1>
                <h1 style={{ color: this.props.color }}>{this.state.count}</h1>
                <h1>color: {this.state.color}</h1>
                <button onClick={this.changeCount}>하나 증가</button>
            </>
        );
    }
}

export default LifecycleSample;
```

<br>

## Errorboundary.js
```js
import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false,
        message: ""
    };

    componentDidCatch(error, info) {
        console.log("componentDidCatch is called");
        console.log({ error, info });

        this.setState({ error: true, message: error.message });
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <h1>자식 컴포넌트에 에러가 발생했습니다.</h1>
                    <div>{this.state.message}</div>
                </>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;

```

<br>

## App.js
```js
import { Component, isValidElement } from "react";
import LifecycleSample from "./LifecycleSample";
import ErrorBoundary from "./Errorboundary";

// 랜덤하게 색상(#0 ~ #ffffff)을 생성하는 함수
const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);


class App extends Component {
  state = {
    color: "#000000",
    isVisible: false
  };

  changeColor = () => {
    console.log("랜덤 컬러 버튼 클릭!");
    this.setState({color: getRandomColor()});
  }
  changeIsVisible = () => {
    console.log(`자식 컴포넌트 ${this.state.isVisible ? "숨기기" : "보이기"} 버튼 클릭!!!`)
    this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return(
      <>
        <button onClick={this.changeIsVisible}>
          자식 컴포넌트 {this.isVisible ? "숨기기" : "보이기"}
        </button>
        {
          this.state.isVisible &&
          <div>
            <button onClick={this.changeColor}>랜덤 컬러</button>
            <ErrorBoundary>
              <LifecycleSample color={this.state.color} />
            </ErrorBoundary>
          </div>
        }
      </>
    );
  }
}

export default App;
```
