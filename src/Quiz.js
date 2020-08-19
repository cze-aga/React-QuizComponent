import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.jss";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }
  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_question.length;
    return (
      <div className="QuizQuestion">
        {isQuizEnd ? (
          <QuizEnd />
        ) : (
          <QuizQuestion
            instruction_text={quizData.quiz_questions[0].instruction_text}
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
          />
        )}
      </div>
    );
  }
}

let quizData = require("./quiz_data.json");

export default Quiz;
