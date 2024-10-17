import { FC, useContext, useEffect } from "react";
import { HomePageViewDesc, HomePageViewTitle } from "./styled";
import Stack from "@mui/material/Stack";
import Button, { ButtonProps } from "@mui/material/Button";
import LayoutViewContainer from "components/Layout";
import { useNavigate } from "react-router";

const Homepage: FC = () => {
  const navigate = useNavigate();
  const clickHandler: () => void = () => navigate("/test");

  return (
    <LayoutViewContainer size="small" contentalign="center">
      <HomePageViewTitle>Multiple Choice Test</HomePageViewTitle>
      <HomePageViewDesc>
        Please answer each question to the best of your ability. Some questions
        may be multiple choice, so please read carefully before making your
        selection. To proceed to the next question, you must choose an answer;
        once selected, you won't be able to change your answer. Good luck!
      </HomePageViewDesc>
      <Stack direction="row">
        <Button variant="contained" color="primary" onClick={clickHandler}>
          Start Test
        </Button>
      </Stack>
    </LayoutViewContainer>
  );
};

export default Homepage;
