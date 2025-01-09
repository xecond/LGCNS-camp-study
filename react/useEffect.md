## Info.js
```js
import { useState, useEffect } from "react";

function Info() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const changeName = e => setName(e.target.value);
    const changeNickname = e => setNickname(e.target.value);

    // 의존성 배열을 생략 => 마운트, 업데이트 모두 이펙트 함수를 실행
    // 의존성 배열의 값으로 빈 배열([ ])을 설정 => 마운트될 때만 실행
    // 의존성 배열에 변경을 검사할 상태변수를 추가 => 마운트될 때와 특정 상태변수가 변경될 때 실행
    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log({ name, nickname });

        return () => console.log("cleanup", name);	// 후처리 함수 추가
    }, [name]);

    return(
        <>
            <div>
                <p>이름: {name}</p>
                <p>별명: {nickname}</p>
            </div>
            <div>
                <p>이름: <input type="text" name="name" value={name} onChange={changeName} /></p>
                <p>별명: <input type="text" name="nickname" value={nickname} onChange={changeNickname} /></p>
            </div >
        </>

    );
}

export default Info;
```

<br>

## App.js
```js
import { useState } from "react";
import Info from "./Info";

export default () => {
  const [isVisible, setIsVisible] = useState(false);

  const changeIsVisible = () => setIsVisible(!isVisible);

  return (
    <>
      <button onClick={changeIsVisible}>{isVisible ? "숨기기" : "보이기"}</button>
      <br />
      {isVisible && <Info />}
    </>
  );
};
```
