# 테마 바꾸기

## ThemeContext.js
```js
import { createContext } from "react";

// 1. Context 생성
const ThemeContext = createContext();

export default ThemeContext;
```

<br>

## ThemeProvider.js
```js
import { useState } from "react";
import ThemeContext from "./ThemeContext";

// 2-1. Provider 정의
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;
```

<br>

## ThemeButton.js
```js
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedButton = () => {
    // 3. Context 소비
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <button onClick={changeTheme}
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "yellow"
            }}>테마 변경</button>
    );
};
export default ThemedButton;
```

<br>

## Blog.js
```js
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Blog = () => {
    // 3. Context 소비
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff"
        }}>
            <h1>블로그</h1>
            <hr />
            <h2>블로그 제목</h2>
            <p>블로그 내용</p>
        </div>
    );
};
export default Blog;
```

<br>

## News.js
```js
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const News = () => {
    // 3. Context 소비
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff"
        }}>
            <h1>뉴스</h1>
            <hr />
            <h2>뉴스 제목</h2>
            <p>뉴스 내용</p>
        </div>
    );
};
export default News;
```

<br>

## Contents.js
```js
import Blog from "./Blog";
import News from "./News";

// 하위 컴포넌트로 전달을 위한 props 변수 생성(정의)하지 않아도 됨
const Contents = () => {
    return (
        <>
            <Blog />
            <News />
        </>
    );
};
export default Contents;
```

<br>

## App.js
```js
import "./App.css";
import Contents from "./Contents";
import ThemedButton from "./ThemedButton";
import ThemeProvider from "./ThemeProvider";

// 2-2. 컨텍스트 변수를 공유할 컴포넌트를 Provider를 둘러쌈
export default function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>테마가 적용된 페이지</h1>
        <ThemedButton />
        <Contents />
      </div>
    </ThemeProvider>
  );
}
```
ThemeProvider 컴포넌트를 사용하지 않고 Provider를 직접 정의하는 방식
```js
import "./App.css";
import { useState } from "react";
import Contents from "./Contents";
import ThemedButton from "./ThemedButton";
// import ThemeProvider from "./ThemeProvider";
import ThemeContext from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <h1>테마가 적용된 페이지</h1>
        <ThemedButton />
        <Contents />
      </div>
    </ThemeContext.Provider>
  );
}
```

<br>
<hr>

# useContext로 변경하는 예제 1
## App.js
변경 전
```js
import { useState } from "react";

function Child({ plusOne, subCount }) {
  return (
    <>
      <button onClick={plusOne}>+1</button>
      <button onClick={subCount}>-1</button>
    </>
  );
};

function Parent() {
  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);
  const subCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={resetCount}>Reset</button>
      <Child plusOne={addCount} subCount={subCount} />
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
변경 후
```js
import { useState, createContext, useContext } from "react";

const CounterContext = createContext();

const CounterProvider = () => {

  const [count, setCount] = useState(0);
  const addCount = () => setCount(count + 1);
  const subCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <CounterContext.Provider value={{count, addCount, subCount, resetCount}}>
      {children}
    </CounterContext.Provider>
  );

}


function Child({ plusOne, subCount }) {
  const {addCount: plusOne, subCount} = useContext(CounterContext);
  return (
    <>
      <button onClick={plusOne}>+1</button>
      <button onClick={subCount}>-1</button>
    </>
  );
};

function Parent() {
  const {count, resetCount} = useContext(CounterContext);
  return (
    <>
      <div>{count}</div>
      <button onClick={resetCount}>Reset</button>
      <Child />
    </>
  );
}

function App() {
  return (
    <CounterProvider>
      <Parent />
    </CounterProvider>
  );
}
export default App;
```

<br>
<hr>

# useContext로 변경하는 예제 2
## App.js
변경 전
```js
import { useState } from "react";

function Controller({ plusOne, minusOne }) {
  return (
    <>
      <button onClick={plusOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
    </>
  );
}

function Display({ count }) {
  return (
    <h1>{count}</h1>
  );
}

function Parent() {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  const plusOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1);
  return (
    <>
      <button onClick={reset}>Reset</button>
      <Controller plusOne={plusOne} minusOne={minusOne} />
      <Display count={count} />
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
변경 후
```js
import { useState, createContext, useContext, useReducer } from "react";

// useReducer을 통해 코드 단순화
const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { count: 0 };
    case "plusone":
      return { count: state.count + 1 };
    case "minusone":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const CounterContext = createContext();

const CounterProvider = ({children}) => {
  /* const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  const plusOne = () => setCount(count + 1);
  const minusOne = () => setCount(count - 1); */
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return(
    <CounterContext.Provider value={{
      count: state.count, 
      reset: () => dispatch({type: "reset"}), 
      plusOne: () => dispatch({type: "plusone"}), 
      minusOne: () => dispatch({type: "minusone"})}}>
      {children}
    </CounterContext.Provider>
  );
}

function Controller() {
  const { plusOne, minusOne } = useContext(CounterContext);
  return (
    <>
      <button onClick={plusOne}> +1 </button>
      <button onClick={minusOne}> -1 </button>
    </>
  );
}

function Display() {
  const { count } = useContext(CounterContext);
  return (
    <h1>{count}</h1>
  );
}

function Parent() {
  const {reset} = useContext(CounterContext);
  return (
    <>
      <button onClick={reset}>Reset</button>
      <Controller />
      <Display />
    </>
  );
}

function App() {
  return (
    <CounterProvider>
      <Parent />
    </CounterProvider>
  );
}
export default App;
```






