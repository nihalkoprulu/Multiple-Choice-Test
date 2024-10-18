import styled from 'styled-components';
import { themeColors } from 'assets/theme/style';

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 20px;
    background-color: ${themeColors.white};
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px;  
`;

export const LogoContainer = styled.div`
    display: flex;
    cursor: pointer;
`;