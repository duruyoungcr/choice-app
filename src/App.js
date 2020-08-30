import React, { useState } from "react";

//import components
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Popularity from "./components/Popularity";

// import styles
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <div className="App">
      <Header submitted={submitted} />
      <div className="container">
        {submitted ? (
          <div>
            <Result
              question={question}
              setQuestion={setQuestion}
              options={options}
              setOptions={setOptions}
              submitted={submitted}
              setSubmitted={setSubmitted}
              setRandomNumber={setRandomNumber}
              randomNumber={randomNumber}
            />
            <Popularity
              question={question}
              questions={questions}
              setQuestions={setQuestions}
            />
          </div>
        ) : (
          <Form
            question={question}
            setQuestion={setQuestion}
            options={options}
            setOptions={setOptions}
            setSubmitted={setSubmitted}
            setRandomNumber={setRandomNumber}
            setError={setError}
            error={error}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
