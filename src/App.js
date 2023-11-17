import React, { useState } from 'react';
import './App.css';

const QuizApp = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      answer: 'Blue Whale',
    },
    {
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Cell Membrane', 'Chloroplast', 'Mitochondria'],
      answer: 'Mitochondria',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    const updatedAnswers = [...userAnswers, { question: currentQuestion, answer }];
    setUserAnswers(updatedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer) => {
      const question = questions[userAnswer.question];
      if (question.answer === userAnswer.answer) {
        score++;
      }
    });
    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowScore(false);
  };

  return (
    <div className='main'>
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {calculateScore()} out of {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default QuizApp;
