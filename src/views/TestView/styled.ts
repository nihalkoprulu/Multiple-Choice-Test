import styled from 'styled-components';
import { size, themeColors } from 'assets/theme/style';
import { typography } from 'assets/theme/typography';

export const QuestionsWrapper = styled.div`
  width: 100%;
  max-width: ${size.desktopS};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;

  @media (max-width: 480px) {
    max-width: none;
  }
`;

export const QuestionTitle = styled.p`
  color: ${themeColors.text};
  ${typography.bodySemiBold};
`;

export const QuestionAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${themeColors.text};
  ${typography.bodyRegular};
`;

