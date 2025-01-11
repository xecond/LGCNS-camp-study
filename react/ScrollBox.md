# Scrollbox.js
```js
import { Component } from "react";

class ScrollBox extends Component {
    // 맨 위나 아래로 이동하는 함수
    scrollBottom = () => {
        /*
        const scrollHeight = this.myDiv.scrollHeight;
        const clientHeight = this.myDiv.clientHeight;
        */
        const {scrollHeight, clientHeight} = this.myDiv;
        this.myDiv.scrollTop = scrollHeight - clientHeight;
    };
    scrollTop = () => {
        this.myDiv.scrollTop = 0;
    };

    render() {
        // 스타일
        const styles = {
            outer: {
                border: "1px solid black",
                height: 300,
                width: 300,
                overflow: "auto"
            },
            inner: {
                width: "100%",
                height: 650,
                background: "linear-gradient(white, black)"
            }
        };

        // 리턴 함수
        return (
            <>
                <div style={styles.outer} ref={x => this.myDiv = x}>
                    <div style={styles.inner}></div>
                </div>

                <div>
                    <button onClick={this.scrollTop}>맨 위로 이동</button>
                    <button onClick={this.scrollBottom}>맨 아래로 이동</button>
                </div>
            </>
            
        );
        
    }
}

export default ScrollBox;
```

<br>

# App.js
```js
import ScrollBox from "./ref/ScrollBox";

function App() {
  return <ScrollBox />;
}

export default App;
```
