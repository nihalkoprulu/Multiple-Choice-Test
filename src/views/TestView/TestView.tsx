import { FC, useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LayoutViewContainer from "components/Layout";
import {
  AnswerDataType,
  QuestionDataType,
  ServerAnswerDataType,
} from "utils/types/interfaces/QuestionDataType";
import loader from "assets/lottie-animations/vertical_loader.json";
import Lottie from "lottie-react";
import { Button } from "@mui/material";
import {
  QuestionsContainer,
  QuestionTitle,
  QuestionsWrapper,
  QuestionAnswerContainer,
} from "./styled";
import RadioGroupControl from "components/RadioGroupControl";
import CheckboxGroupControl from "components/CheckboxControl";
import ResultComponent from "components/ResultComponent";
import { fetchQuestions, submitAnswers } from "api/api";

const TestView: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(false);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [allQuestions, setAllQuestions] = useState<QuestionDataType[]>([]);
  const [results, setResults] = useState<ServerAnswerDataType[]>([]);
  const [allAnswers, setAllAnswers] = useState<AnswerDataType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions: () => void = async () => {
    try {
      const fetchedQuestions: QuestionDataType[] = await fetchQuestions();

      setAllQuestions(fetchedQuestions);
    } catch (error: any) {
      if (error.message === "Network unavailable or invalid JSON") {
        setError("Failed to load data. Invalid data format.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNextQuestion: () => void = () => {
    setActiveQuestion(activeQuestion + 1);
  };

  const resetAnswers = (): void => {
    setAllAnswers([]);
    setCompleted(false);
    setActiveQuestion(0);
  };

  const handleAnswerSubmit: (
    questionId: number,
    selectedAnswers: string[]
  ) => void = (questionId, selectedAnswers) => {
    const newAnswer: AnswerDataType = {
      questionId,
      answers: selectedAnswers,
    };

    setAllAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(
        (answer) => answer.questionId === questionId
      );
      if (existingAnswerIndex > -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = newAnswer;
        return updatedAnswers;
      }
      return [...prevAnswers, newAnswer]; // Add a new answer
    });
  };

  const handleSubmit: () => void = async () => {
    try {
      const results: ServerAnswerDataType[] = await submitAnswers(allAnswers);
      setResults(results);
      setCompleted(true);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const getCurrentAnswerLength: () => number = () => {
    const currentAnswerIndex = allAnswers.findIndex(
      (answer) => answer.questionId === activeQuestion + 1
    );

    return currentAnswerIndex !== -1 ? 1 : 0;
  };

  const renderLoader: () => JSX.Element = () => (
    <Lottie
      style={{
        height: "10vh",
      }}
      loop
      animationData={loader}
    />
  );

  const renderResults: () => JSX.Element = () => (
    <ResultComponent
      questions={allQuestions}
      results={results}
      clickHandler={resetAnswers}
    />
  );

  const renderQuestions: () => JSX.Element = () => (
    <QuestionsWrapper>
      <Stepper nonLinear activeStep={activeQuestion}>
        {allQuestions.map((question, index) => (
          <Step key={question.id}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <QuestionsContainer>
        <QuestionTitle>{allQuestions[activeQuestion]?.question}</QuestionTitle>
        <QuestionAnswerContainer>
          {allQuestions[activeQuestion]?.multiple ? (
            <CheckboxGroupControl
              options={allQuestions[activeQuestion]?.answers}
              onAnswerSelect={(selectedOptions: string[]) =>
                handleAnswerSubmit(
                  allQuestions[activeQuestion].id,
                  selectedOptions
                )
              }
            />
          ) : (
            <RadioGroupControl
              options={allQuestions[activeQuestion]?.answers}
              onAnswerSelect={(selectedAnswers: string) =>
                handleAnswerSubmit(allQuestions[activeQuestion].id, [
                  selectedAnswers,
                ])
              }
            />
          )}
        </QuestionAnswerContainer>

        <Button
          variant="contained"
          onClick={
            activeQuestion === allQuestions.length - 1
              ? handleSubmit
              : handleNextQuestion
          }
          disabled={getCurrentAnswerLength() === 0 && !completed}
        >
          {activeQuestion === allQuestions.length - 1
            ? "See the result"
            : "Next"}
        </Button>
      </QuestionsContainer>
    </QuestionsWrapper>
  );

  const renderError: () => JSX.Element = () => (
    <QuestionsWrapper>{error} </QuestionsWrapper>
  );

  const renderView: () => JSX.Element = () => {
    if (loading) {
      // Render loader when loading is true
      return renderLoader();
    } else if (error) {
      // Render error message if there's an error
      return renderError();
    } else if (!completed) {
      // Render questions if the test is ongoing
      return renderQuestions();
    } else {
      // Render results once the test is completed
      return renderResults();
    }
  };

  return (
    <LayoutViewContainer size="medium" contentalign="center">
      {renderView()}
    </LayoutViewContainer>
  );
};

export default TestView;
