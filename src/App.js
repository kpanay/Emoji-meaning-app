import "./styles.css";
import React, { useState } from "react";
var heading = "Emoji Meaning App";
var headColor = "red";
// let counter = 0;

const emojiDictionary = {
  "🦁": "Lion",
  "🐈": "Cat",
  "🐯": "Tiger",
  "🐴": "Horse",
  "🐮": "Cow"
};

export default function App() {
  const [count, setCount] = useState(0);
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  const like = (e) => {
    setCount(count + 1);
    console.log("you liked me", count);
  };

  const changeHandler = (e) => {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Meaning not found...");
    }
  };

  return (
    <div className="App">
      <h1 style={{ backgroundColor: headColor }}>{heading}</h1>
      <button onClick={like}>Click me</button>
      <h2>{count}</h2>

      <input
        text="text"
        name="name"
        onChange={changeHandler}
        value={emoji}
      ></input>
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
    </div>
  );
}
