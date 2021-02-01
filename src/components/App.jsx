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
  return <p>{props.question.text}</p>;
}

function NextQuestion() {
  return <button>NextQuestion</button>;
}

export default App;
