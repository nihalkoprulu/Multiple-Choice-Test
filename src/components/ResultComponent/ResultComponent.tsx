import { FC, useEffect, useState } from "react";
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
  ResultViewAnswer,
  ResultViewContainer,
  ResultViewMessage,
  ResultViewQuestion,
  ResultViewScore,
  ResultViewTitle,
  ResultViewWrapper,
} from "./styled";
import { themeColors } from "assets/theme/style";
import { submitAnswers } from "api/api";

interface IResultDetailProps {
  questions: QuestionDataType[];
  results: ServerAnswerDataType[];
  clickHandler: () => void;
}

const ResultComponent: FC<IResultDetailProps> = ({
  questions,
  results,
  clickHandler,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [correctCount, setCorrectCount] = useState<number>(0);

  useEffect(() => {
    const correctCount = results.filter(
      (result: ServerAnswerDataType) => result.isCorrect
    ).length;

    setCorrectCount(correctCount);
    setLoading(false);
  }, [results, questions]);

  const renderLoader: () => JSX.Element = () => (
    <Lottie
      style={{
        height: "10vh",
      }}
      loop
      animationData={loader}
    />
  );

  const renderResult: () => JSX.Element = () => (
    <ResultViewWrapper>
      <ResultViewTitle>Test Result</ResultViewTitle>
      <ResultViewScore>
        Correctly answered questions: {correctCount} out of {questions.length}
      </ResultViewScore>
      {correctCount === questions.length ? (
        <ResultViewMessage>
          Congratulations! You passed the test!
        </ResultViewMessage>
      ) : (
        results.map((result, index) => (
          <ResultViewContainer key={`${index}+result`}>
            <ResultViewQuestion>{result.question}</ResultViewQuestion>
            <ResultViewAnswer>
              Your Answers:
              {result.answers.length > 0 ? result.answers.join(", ") : "None"}
            </ResultViewAnswer>
            <ResultViewAnswer>
              Correct Answers: {result.correctAnswers.join(", ")}
            </ResultViewAnswer>
            <ResultViewAnswer
              style={{
                color: result.isCorrect
                  ? themeColors.success
                  : themeColors.error,
              }}
            >
              {result.isCorrect ? "Correct!" : "Incorrect"}
            </ResultViewAnswer>
          </ResultViewContainer>
        ))
      )}
      {correctCount < questions.length && (
        <Button variant="contained" onClick={clickHandler}>
          Try Again
        </Button>
      )}
    </ResultViewWrapper>
  );

  return (
    <LayoutViewContainer size="medium" contentalign="center">
      {loading ? renderLoader() : renderResult()}
    </LayoutViewContainer>
  );
};

export default ResultComponent;
