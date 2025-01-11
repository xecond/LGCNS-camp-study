## Average.js
```js
import React, { useMemo, useRef, useState } from "react";

/* 저장된 숫자들의 평균을 구해서 출력하는 기능을 추가
 ⇒ 숫자를 입력하는 도중에도 불필요하게 평균값을 계산
  ⇒ 불필요한 리소스 사용 및 렌더링 지연 문제가 발생 */
const getAverage = (numbers) => {
    console.log("평균값 계산 중 ...");

    // 빈 배열인 경우 0을 반환
    if (numbers.length === 0)
        return 0;

    // 평균을 계산 => 총합을 계산해서 배열의 길이로 나눈 값을 반환
    const total = numbers.reduce((prev, curr) => prev + curr);
    console.log(total);
    return total / numbers.length;
};


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
                {/* <p>평균값: {getAverage(list)}</p> */}
                <p>평균값: {avg}</p>
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
import "./App.css";
import Average from "./Average";

export default () => <Average />;
```
