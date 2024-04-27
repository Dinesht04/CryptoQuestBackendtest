import Stepper from "./Stepper";
import Header from "./Header";
import { data } from "autoprefixer";
import { useState } from "react";

//fetch request doesn't fetch the data everytime, have to refresh
//uncomment the api-link and all the project-IDs in the quiz-component,appwrite.jsx and appwriteConfig.jsx to run

var doc = [];

fetch(
  // "https://cloud.appwrite.io/v1/databases/662a61ff31f95f4e00a7/collections/662a620cb0f15797b46a/documents",
  {
    method: "GET",
    headers: {
      // "X-Appwrite-Project": "662a61da6824b9c5f45a",
      "X-Appwrite-Key": "https://cloud.appwrite.io/v1",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    doc = data;
  })
  .catch((error) => console.error("Error fetching documents:", error));

  


function Quiz() {

  const quesData = doc.documents;
  const ques = Object.values(quesData).map(item => item.Question);
  const allOptions = Object.values(quesData).map(item => item.Options);
  const CorrectAnswers = Object.values(quesData).map(item => item.CorrectAnswer);

  const Questions = [
    {
      component: () => <div>{ques[0]} </div>,
      options: allOptions[0],
    },
    {
      component: () => <div>{ques[1]}</div>,
      options: allOptions[1],
    },
    {
      component: () => <div>{ques[2]}</div>,
      options: allOptions[2],
    },
    {
      component: () => <div>{ques[3]}</div>,
      options: allOptions[3],
    },
    {
      component: () => <div>{ques[4]}</div>,
      options: allOptions[4],
    },
  ];

  

  console.log(ques,allOptions,CorrectAnswers);

  return (
    <>
      <div className="bg-[#1A1916] text-white flex flex-col justify-center items-center">
        <div className="w-screen min-h-screen">
          <Header/>
          <hr className="mb-4" />
          <Stepper Questions={Questions} CorrectAnswers={CorrectAnswers} />
        </div>
      </div>
    </>
  );
}

export default Quiz;
