## App.js
```js
import { useState } from "react";

function BoilingPredict(props) {
  const boiling = (props.celsius >= 100) ? "물이 끓습니다." : "물이 끓지 않습니다."
  return (
    <div>{boiling}</div>
  );
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const inputValue = parseFloat(temperature);
  if (Number.isNaN(inputValue)) return "";
  const outputValue = convert(inputValue);
  const outputValueRounded = Math.round(outputValue * 1000) / 1000;
  return outputValueRounded.toString();
}

const scaleName = {
  c: "섭씨",
  f: "화씨"
};

function Temperature({scale, temperature, changeTemperature}) {
  // 이벤트 핸들링 함수
  const handleChange = e => { changeTemperature(e.target.value); };
  // 리턴 함수
  return (
    <fieldset>
      <legend>온도를 입력하세요. (단위: {scaleName[scale]})</legend>
      <input value={temperature} onChange={handleChange}></input>
    </fieldset>
  );
}

function Calculator() {
  // state 변수
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");
  // 섭씨 온도(c)/화씨 온도(f)가 입력된 경우 호출될 함수 - 온도와 단위 state 변수를 set
  const changeCelsius = t => {
    setTemperature(t);
    setScale("c");
  };
  const changeFahrenheit = t => {
    setTemperature(t);
    setScale("f");
  };
  // 섭씨 온도와 화씨 온도
  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c"? tryConvert(temperature, toFahrenheit) : temperature;
  // 리턴 함수
  return (
    <>
      <fieldset>
        <Temperature scale={"c"} temperature={celsius} changeTemperature={changeCelsius}/>
        <Temperature scale={"f"} temperature={fahrenheit} changeTemperature={changeFahrenheit}/>
        <BoilingPredict celsius={celsius}/>
      </fieldset>
    </>
  );
}

function App() {
  return (
    <Calculator />
  );
}
export default App;
```
