## PasswordChecker.js
```js
import { Component } from "react";

class PasswordChecker extends Component {
    // state 변수
    state = {
        password: "",
        isValid: false
    };
    // 핸들링 함수
    changePassword = e => this.setState({password: e.target.value});
    clickButton = () => {
        if (this.state.password === "0000") {
            this.setState({isValid: true});
        } else {
            this.setState({isValid: false});
            this.myInput.focus(); // 패스워드가 틀렸을 때 패스워드 입력창에 포커스가 전달됨
        }
    };
    // 리턴 함수
    render() {
        return(
            <>
                <input type="password" value={this.state.password} onChange={this.changePassword}
                style={this.state.isValid ? {backgroundColor: "blue"} : {backgroundColor: "red"}}
                ref={x => this.myInput = x} />
                <button onClick={this.clickButton}>패스워드 검증</button>
            </>
        );
    }   
}

export default PasswordChecker;
```

<br>

## App.js
```js
import PasswordChecker from "./PasswordChecker";

export default function App() {
  return <PasswordChecker />;
}
```
