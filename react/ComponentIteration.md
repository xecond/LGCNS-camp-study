## IterationSample.js
```js
import { useState } from "react";

const IterationSample = () => {
    // 상태변수
    const [words, setWords] = useState(
        [
            {id: 1, word:"봄"},
            {id: 2, word:"여름"},
            {id: 3, word:"가을"},
            {id: 4, word:"겨울"},
        ]
    );
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    // 목록
    const wordList = words.map(item => <li onDoubleClick={() => handleDeleteItem(item.id)} key={item.id}>{item.word}</li>);
    // 이벤트 핸들러
    const handleChange = e => { setInputText(e.target.value); }
    const handleAddItem = () => {
        const newItem = {id: nextId, word: inputText};
        const newWords = words.concat(newItem);
        setWords(newWords);

        setNextId(nextId+1);
        setInputText("");
    };
    const handleDeleteItem = id => {
        const newWords = words.filter(word => word.id != id);
        setWords(newWords);
    }
    // 리턴 함수
    return (
        <>
            <input type="text" value={inputText} onChange={handleChange}/>
            <button onClick={handleAddItem}>추가</button>
            <ul>
                {wordList}
            </ul>
        </>
    );
}

export default IterationSample
```

<br>

## App.js
```js
import IterationSample from "./IterationSample";

function App() {
  return (
    <IterationSample />
  );
}
export default App;
```
