import React from 'react';
import './Question.scss';

class Question extends React.Component {
  render() {
    return (
      <div className="question-container">
        <div className="question-text">{this.props.text}</div>
        {
          this.props.answers.length > 0
          ? (<div className="radio-container"> 
            { this.props.answers.map((answer, index) => { 
              return <div className="radio" key={index}>
                      <input type="radio" id={this.props.id} name="answer" value={answer} />
                      <label htmlFor={this.props.id}>{answer}</label>
                    </div>;
              })
            }
            </div>)
          : <input type="text"/>
        }
      </div>
    );
  }
}

export default Question;