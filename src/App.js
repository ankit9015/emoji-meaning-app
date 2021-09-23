import "./styles.css";
import React, { useState } from "react";

const emojiDict = {
  "😊": "smiling",
  "😉": "winking",
  "🤔": "thinking",
  "🙄": "eye-roll, frowning",
  "😴": "sleeping",
  "😠": "angry",
  "😞": "sad",
  "": ""
};

var emojisWeKnow = Object.keys(emojiDict);

export default function App() {
  const [emojiName, getEmojiName] = useState("");

  function onEmojiInput(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    getEmojiName(meaning);
  }

  function clickEmojiHandler(emoji) {
    var meaning = emojiDict[emoji];
    getEmojiName(meaning);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={onEmojiInput}></input>
      <p>Meaning: {emojiName}</p>

      <h1>emojis we know:</h1>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => clickEmojiHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "2rem 0.7rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
