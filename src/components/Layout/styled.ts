import { size } from 'assets/theme/style';
import styled from 'styled-components';

interface Size {
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  margin?: string;
  padding?: string;
  minWidth? :string;
  contentalign? :string;
}

export const LayoutViewContainerStyled = styled.div<Size>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  align-items: ${({ contentalign }) => contentalign ? contentalign : 'flex-start'};
  gap: 24px;
  width: ${({ size }) =>
    sizeSetterWidth(size || 'large')};
  padding: ${({ size }) =>
    sizeSetterPadding(size || 'medium')};
  min-width: 480px;

  @media (max-width: 480px) {
    min-width: unset;
    width: ${({ size }) =>
    sizeSetterWidth('large')};
  }
`;

const sizeSetterPadding: (size: 'xlarge' | 'large' | 'medium' | 'small') => string = (size) => {
  switch (size) {
    case 'xlarge':
      return '16px 100px 32px 100px';
    case 'large':
      return '16px 100px 32px 100px';
    default:
      return '16px';
  }
};

const sizeSetterWidth: (size: 'xlarge' | 'large' | 'medium' | 'small') => string = (size) => {
  switch (size) {
    case 'xlarge':
      return '100%';
    case 'medium':
      return '65%';
    case 'small':
      return '50%';
    default:
      return '80%';
  }
};
