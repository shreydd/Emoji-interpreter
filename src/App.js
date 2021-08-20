import "./styles.css";
import React, { useState } from "react";
var heading = "inside outt";
var primaryColor = "";
// var liveCounter = 0;

var emojiDictonary = {
  "😂": "laughing",
  "😑": "annoyed",
  "😴": "sleepy",
  "😭": "crying",
  "🔥": "fire",
  "😎": "Mr Cool",
  "😃": "Happy",
  "😟": "worried",
  "🤪": "Gone crazy",
  "🤤": "Dr Drool"
};

var emojisWeKnow = Object.keys(emojiDictonary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function inputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this emoji in our database";
    }

    setmeaning(meaning);
  }

  function emojiClickerHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictonary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: primaryColor }}>{heading}</h1>
      <input onChange={inputHandler} />
      <div style={{ padding: "1rem" }}>{meaning}</div>

      <p>Emojis we know</p>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickerHandler(emoji)}
            style={{ cursor: "pointer", padding: "0.5rem", fontSize: "20px" }}
            key={emoji}
          >
            {" "}
            {emoji} {""}{" "}
          </span>
        );
      })}
    </div>
  );
}
