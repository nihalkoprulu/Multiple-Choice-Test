import styled from 'styled-components';
import { size, themeColors } from 'assets/theme/style';
import { typography } from 'assets/theme/typography';

export const ResultViewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ResultViewTitle = styled.p`
  color: ${themeColors.text};
  ${typography.headingH1};
`;

export const ResultViewScore = styled.p`
  color: ${themeColors.secondary};
  ${typography.headingH3};
`;

export const ResultViewMessage = styled.p`
  color: ${themeColors.success};
  ${typography.headingH3};
`;

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 10px;
  border: 1px solid ${themeColors.gray};
`;

export const ResultViewQuestion = styled.p`
  color: ${themeColors.text};
  ${typography.bodySemiBold};
`;

export const ResultViewAnswer = styled.p`
  color: ${themeColors.text};
  ${typography.bodyRegular};
`;


