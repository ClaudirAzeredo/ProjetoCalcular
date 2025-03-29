import { useState } from "react";
import "./Siderbar.css";
const Sidebar = () => {
  return <div className="sidebar"></div>;
};

const App = () => {
  const [points, setPoints] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [userAnswer, setUserAnswer] = useState("");

  const operators = ["+", "-", "*", "/"];

  const generateChallenge = () => {
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 10) + 1; 
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    setNum1(randomNum1);
    setNum2(randomNum2);
    setOperator(randomOperator);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    if (userAnswer === "") return; // Evita NaN

    let correctAnswer;
    switch (operator) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = parseFloat((num1 / num2).toFixed(2));
        break;
      default:
        return;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
      setPoints((prevPoints) => prevPoints + 10);
    }

    generateChallenge();
  };

  return (
    <div className="app">
      <h2>Você tem {points} pontos</h2>
      <button onClick={generateChallenge}>Sortear Desafio</button>
      <div>
        <span>{num1}</span> <span>{operator}</span> <span>{num2}</span>
      </div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Validar</button>
    </div>
  );
};

export default App;
