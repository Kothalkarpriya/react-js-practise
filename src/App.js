import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😁": "smiling broadly",
  "😂": "Tears with joy",
  "😊": "Smiling",
  "😉": "Winking ",
  "🤗": "Hugging Face",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "😒": "Unamused Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  // var [userInput, setUserInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in outr database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Cyclopedia!</h1>
      <input
        style={{ padding: "2rem", backgroundColor: "#ecfccb", width: "70%" }}
        onChange={emojiInputHandler}
      ></input>
      <h2 style={{ backgroundColor: "#86efac" }}>{meaning}</h2>

      <h3> Emojis we know </h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
