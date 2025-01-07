## App.js
```js
import { Component } from "react";

class App extends Component {
  // state 변수
  state = {
    userId: "",
    userPw1: "",
    userPw2: ""
  };

  // 핸들러 함수
  /*
  changeUserId = e => {this.setState({userId: e.target.value})};
  changeUserPw1 = e => {this.setState({userPw1: e.target.value})};
  changeUserPw2 = e => {this.setState({userPw2: e.target.value})};
  */
  changeUser = e => {this.setState({[e.target.name]: e.target.value})};
  clickButton = e => {
    // Submit 버튼의 기본 동작을 중지
    e.preventDefault();

    // 객체 비구조화를 통해 state 변수를 지역 변수로
    const {userId, userPw1, userPw2} = this.state;

    // 입력 여부 확인
    if (userId.trim() === "") {
      alert("ID를 입력하세요.");
      this.refUserId.focus();
      return;
    }
    if (userPw1.trim() === "") {
      alert("PW1를 입력하세요.");
      this.refUserPw1.focus();
      return;
    }
    if (userPw2.trim() === "") {
      alert("PW2를 입력하세요.");
      this.refUserPw2.focus();
      return;
    }

    // 패스워드 일치 여부 확인
    if (userPw1.trim() !== userPw2.trim()) {
      alert("PW와 PW 확인이 일치하지 않습니다.");
      this.setState({userPw1: "", userPw2: ""});
      this.refUserPw1.focus();
      return;

    }

    // alert 창으로 입력 내용을 띄움
    alert(`ID: ${userId}\nPW1: ${userPw1}\nPW2: ${userPw2}`);
  };

  render() {
    const {userId, userPw1, userPw2} = this.state;
    // 리턴 함수
    return (
      <div>
        ID: <input type="text" value={userId} name="userId" onChange={this.changeUser} ref={x => this.refUserId = x} /><br />
        PW: <input type="password" value={userPw1} name="userPw1" onChange={this.changeUser} ref={x => this.refUserPw1 = x} /><br />
        PW: <input type="password" value={userPw2} name="userPw2" onChange={this.changeUser} ref={x => this.refUserPw2 = x}/><br />
        <button type="submit" onClick={this.clickButton}>등록</button>
      </div>
    );
  }
}

export default App;
```
