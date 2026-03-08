import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("home"); // home | quiz | finished
  const [questionNumber, setQuestionNumber] = useState(0);

  const quizQuestions = [
    {
      question: "Какво е React?",
      options: [
        "Език за програмиране",
        "Библиотека за потребителски интерфейси",
        "Операционна система",
      ],
    },
    {
      question: "За какво се използва useState?",
      options: [
        "За стилове",
        "За управление на състояние",
        "За работа с файлове",
      ],
    },
    {
      question: "Какво представлява Virtual DOM?",
      options: [
        "Копие на DOM за по-бързи промени",
        "CSS библиотека",
        "HTML елемент",
      ],
    },
    {
      question: "Кои компоненти са по-модерни в React?",
      options: [
        "Само класови",
        "Функционални с hooks",
        "Компоненти без JSX",
      ],
    },
  ];

  const handleStart = () => {
    setView("quiz");
    setQuestionNumber(0);
  };

  const handleAnswer = () => {
    if (questionNumber + 1 < quizQuestions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setView("finished");
    }
  };

  const handleReset = () => {
    setView("home");
    setQuestionNumber(0);
  };

  return (
    <div className="app-container">
      {view === "home" && (
        <>
          <h1>React тест</h1>
          <p>Провери знанията си</p>
          <button onClick={handleStart}>Старт</button>
        </>
      )}

      {view === "quiz" && (
        <>
          <h2>
            Въпрос {questionNumber + 1} от {quizQuestions.length}
          </h2>
          <p>{quizQuestions[questionNumber].question}</p>

          {quizQuestions[questionNumber].options.map((opt, i) => (
            <button key={i} onClick={handleAnswer}>
              {opt}
            </button>
          ))}
        </>
      )}

      {view === "finished" && (
        <>
          <h1>Тестът приключи успешно 🎉</h1>
          <button onClick={handleReset}>Нов опит</button>
        </>
      )}
    </div>
  );
}

export default App;
