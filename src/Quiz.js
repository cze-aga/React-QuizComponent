import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }
  render() {
    return (
      <div className="QuizQuestion">
        <QuizQuestion
          instruction_text={quizData.quiz_questions[0].instruction_text}
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
        />
      </div>
    );
  }
}

let quizData = require("./quiz_data.json");

export default Quiz;
