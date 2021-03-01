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
      <CorrectAnswer
        correct={[data[questionNum].question]}
        index={answerIndex}
      />
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
  return ( <div>
    <button
      onClick={() => {
        setisAnswered(true);
        
      }}
    >
      Click for correct answer
    </button>
  );
  {isAnswered === true ? (
          <div>{props.correct.choices[props.index]}</div>
        ) : (
          <div>Question hasn't been answered.</div>
        );

  </div>}
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
