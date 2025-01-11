## TrafficLight.js
```js
import { Component } from "react";

class Lamp extends Component {
    render() {
        const {size, color} = this.props;
        return (
            <div style={{width:size, height:size, borderRadius:size/2, backgroundColor:color}}></div>
        );
    }
}

class TrafficLight extends Component {
    render() {
        const {size, colors} = this.props
        return (
            <>
                {
                    colors.map(color => 
                        <Lamp size={size} color={color} />
                    )
                }
            </>
        );
    }
}

export default TrafficLight;
```

<br>

## App.js
```js
import TrafficLight from "./TrafficLight";

function App() {
  const tlSize = 100;
  const tlColors = ["red", "blue", "green", "yellow"];

  return (
    <>
      <TrafficLight size={tlSize} colors={tlColors} />
    </>
  );
}

export default App;
```
