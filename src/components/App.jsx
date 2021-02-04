import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
let questionNum = 0;
function App() {
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[questionNum].question} />
      <Answer answers={data[questionNum].question} />
      <NextQuestion />
      <CorrectAnswer />
    </div>
  );
}

function Question(props) {
  return <div>{props.question.text}</div>;
}

function NextQuestion() {
  return <button>Next Question</button>;
}

function CorrectAnswer(props) {
  let [isAnswered, setisAnswered] = useState(false);
  return (
    <button onClick={() => setIsAnswered(true)}>
      Click for correct answer
    </button>

    // {(setIsAnswered === true)
    //   ? <div>{props.correct}</div> I tried
    //   : <div> </div>
    //   }
  );
}

function Answer(props) {
  return (
    <div>
      {props.answers.choices.map((answer) => (
        <div>{answer}</div>
      ))}
    </div>
  );
}

export default App;
