import React, { Component } from "react";

class QuizQuestionButton extends React.Component {
  render(props) {
    return (
      <li>
        <button>{this.props.buttonText}</button>
      </li>
    );
  }
}
export default QuizQuestionButton;
