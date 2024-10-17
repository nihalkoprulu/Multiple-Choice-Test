import { AnswerDataType, QuestionDataType, ServerAnswerDataType, ServerQuestionDataType } from "utils/types/interfaces/QuestionDataType";


export const fetchQuestions = async (): Promise<QuestionDataType[]> => {

  try {
    const response = await fetch("questionData.json");

    if (!response.ok) {
        throw new Error(`Failed to fetch questions: ${response.statusText}`);
    }

    const data = await response.json();
    return data; 

  } catch (error) {
      throw new Error("Network unavailable or invalid JSON");
  }
};

export const submitAnswers = async (answers: AnswerDataType[]): Promise<ServerAnswerDataType[]> => {
  try {
    // Fetch question data from the server
    const response = await fetch("serverQuestionData.json");

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch question data: ${response.statusText}`);
    }

    // Parse the JSON data from the response
    const questions: ServerQuestionDataType[] = await response.json();

    // Calculate results based on user answers
    const results: ServerAnswerDataType[] = questions.map((question) => {
      const userAnswer = answers.find((answer) => answer.questionId === question.id);
      const isCorrect = checkAnswer(userAnswer, question);

      return {
        question: question.question,
        answers: userAnswer ? userAnswer.answers : [],
        correctAnswers: question.correctAnswers,
        isCorrect,
      };
    });

    return results;
  } catch (error) {
    console.error("Error submitting answers:", error);
    throw new Error("Network unavailable or invalid JSON");
  }
};

// Helper function to check if the user's answer is correct
const checkAnswer = (userAnswer: AnswerDataType | undefined, question: ServerQuestionDataType): boolean => {
  if (!userAnswer) return false;

  const { multiple, correctAnswers } = question;

  if (multiple) {
    const userAnswersCount = userAnswer.answers.length;
    const correctAnswersCount = correctAnswers.length;

    return (
      userAnswersCount === correctAnswersCount &&
      userAnswer.answers.every((answer) => correctAnswers.includes(answer))
    );
  } else {
    return userAnswer.answers.includes(correctAnswers[0]);
  }
};