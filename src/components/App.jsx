import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

let questionNum = 0;

function App() {
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[questionNum].question} />
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div>{props.question.text}</div>;
  <Answer answers={data[questionNum].question} />;
}

function NextQuestion() {
  return <button>NextQuestion</button>;
}

function Answer(props) {
  return <div>{props.answers.choices}</div>;
}

export default App;
