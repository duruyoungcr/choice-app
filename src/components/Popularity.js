import React, { useEffect } from "react";

const Popularity = ({ question, questions, setQuestions }) => {
  const display = () => {
    let matchSuccess = false;
    if (questions !== []) {
      const questionsArray = questions;
      for (let i = 0; i < questionsArray.length; i++) {
        if (
          questionsArray[i].question.toLowerCase() === question.toLowerCase()
        ) {
          questionsArray[i].count++;
          setQuestions(questionsArray);
          matchSuccess = true;
        }
      }
    }
    if (!matchSuccess) {
      const questionsArray = [...questions, { question, count: 1 }];
      setQuestions(questionsArray);
    }
  };
  useEffect(() => {
    display();
  }, [display]);

  return (
    <table className="popularity__table">
      <thead>
        <tr>
          <th></th>
          <th>Question</th>
          <th>No of times asked</th>
        </tr>
      </thead>
      <tbody>
        {questions?.map((question, index) => (
          <tr key={index}>
            <td>{index + 1}.</td>
            <td>{question.question} ?</td>
            <td>{question.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Popularity;
