import React, { Component } from "react";

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
        {quizData.quiz_questions[0].instruction_text}
      </div>
    );
  }
}

let quizData = require("./quiz_data.json");

export default Quiz;
