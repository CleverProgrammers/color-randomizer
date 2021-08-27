import {useState} from "react"
import './App.css';

function App() {

  const [color, setColor] = useState("#F397D6");

  const COLOR = [
    "#B8B8F3",
    "#D7B8F3",
    "#F397D6",
    "#F42272",
    "#232E21"
  ]

  const changeColor = () => {
    let randNum = Math.floor(Math.random() * COLOR.length);
    console.log(randNum)
    let color = COLOR[randNum];

    localStorage.setItem("color", color);
    setColor(color);
  }


  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="main">
        <div className="bg-color">
          <h1>Background Color: {color}</h1>
        </div>
        <div className="button" onClick={()=>changeColor()}>
          Click me
        </div>
      </div>
    </div>
  );
}

export default App;