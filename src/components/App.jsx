import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
let questionNum = 0;
let answerIndex = data[questionNum].question.correct_choice_index;
function App() {
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[questionNum].question} />
      <Answer answers={data[questionNum].question} />
      <NextQuestion />
      <CorrectAnswer correct={data[questionNum].question} />
    </div>
  );
}

function Question(props) {
  return <div>{props.question.text}</div>;
}

function NextQuestion() {
  let [qNum, setqNum] = useState(0);
  return (
    <div>
      <button onClick={() => setqNum(1)}>Next Question</button>;
      {qNum === 1 ? (questionNum = 1) : null:}
    </div>
  );
}

function CorrectAnswer(props) {
  let [isAnswered, setisAnswered] = useState(false);
  return (
    <div>
      <button onClick={() => setisAnswered(true)}>
        Click for correct answer
      </button>
      {isAnswered ? (
        <div class="correctAnswer">{props.correct.choices[answerIndex]}</div>
      ) : null}
    </div>
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
