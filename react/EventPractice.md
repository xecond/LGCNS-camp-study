## EventPractice.js - 클래스형 컴포넌트
```js
import { Component } from "react";

class EventPractice extends Component {
    // state 변수
    state = {
        message: "",
        username: ""
    };
    // 이벤트 핸들러 함수
    handlerMessageChange = e => this.setState({message: e.target.value});
    handlerUsernameChange = e => this.setState({username: e.target.value});
    handlerMessageDelete = e => this.setState({message: "", username: ""});
    handlerChange = e => this.setState({[e.target.name]: e.target.value});
    handlerEnter = e => {
        if (e.key === "Enter") {
            this.handlerMessageDelete();
        }
        
    };

    // 렌더 함수
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>

                <p>메시지</p>
                <input type="text" name="message" placeholder="입력해 보세요."
                value={this.state.message}
                onChange={this.handlerChange}
                onKeyUp={this.handlerEnter}></input>
                
                <p>유저 이름</p>
                <input type="text" name="username" placeholder="입력해 보세요."
                value={this.state.username}
                onChange={this.handlerChange}></input>
                
                <h2>입력창 메시지 내용: {this.state.message}</h2>
                <h2>유저 이름: {this.state.username}</h2>
                
                <button onClick={this.handlerMessageDelete}>내용 삭제</button>
            </div>
        );
    }
}

export default EventPractice;
```
## EventPractice.js - 함수형 컴포넌트 ver.1
```js
import { useState } from "react";

function EventPractice() {
    // state 변수와 세터 함수
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    
    // 이벤트 핸들러 함수
    const handlerChange = e => {
        if (e.target.name === "message") {
            setMessage(e.target.value);
        }
        else if (e.target.name === "username") {
            setUsername(e.target.value);
        }
    }
    const handlerMessageDelete = () => {
        setMessage("");
        setUsername("");
    };
    const handlerEnter = e => {
        if (e.key === "Enter") {
            handlerMessageDelete();
        }
    };
    // 리턴 함수
    return (
        <div>
            <h1>이벤트 연습</h1>

            <p>메시지</p>
            <input type="text" name="message" placeholder="입력해 보세요."
            value={message}
            onChange={handlerChange}
            onKeyUp={handlerEnter}></input>
            
            <p>유저 이름</p>
            <input type="text" name="username" placeholder="입력해 보세요."
            value={username}
            onChange={handlerChange}></input>
            
            <h2>입력창 메시지 내용: {message}</h2>
            <h2>유저 이름: {username}</h2>
            
            <button onClick={handlerMessageDelete}>내용 삭제</button>
        </div>
    );
}

export default EventPractice;
```
## EventPractice.js - 함수형 컴포넌트 ver.2
```js
import { useState } from "react";

function EventPractice() {
    // state 변수와 세터 함수
    const [form, setForm] = useState({message: "", username: ""});
    // 객체 비구조화
    const {message, username} = form;
    // 이벤트 핸들러 함수
    const handlerChange = e => {
        const newForm = {...form, [e.target.name]: e.target.value};
        setForm(newForm);
    }
    const handlerMessageDelete = () => {
        const newForm = {message: "", username: ""};
        setForm(newForm);
    };
    const handlerEnter = e => {
        if (e.key === "Enter") {
            handlerMessageDelete();
        }
    };
    // 리턴 함수
    return (
        <div>
            <h1>이벤트 연습</h1>

            <p>메시지</p>
            <input type="text" name="message" placeholder="입력해 보세요."
            value={message}
            onChange={handlerChange}
            onKeyUp={handlerEnter}></input>
            
            <p>유저 이름</p>
            <input type="text" name="username" placeholder="입력해 보세요."
            value={username}
            onChange={handlerChange}></input>
            
            <h2>입력창 메시지 내용: {message}</h2>
            <h2>유저 이름: {username}</h2>
            
            <button onClick={handlerMessageDelete}>내용 삭제</button>
        </div>
    );
}

export default EventPractice;
```

<br>

## App.js
```js
import EventPractice from "./EventPractice";

function App() {
  return (
    <EventPractice />
  );
}
export default App;
```
