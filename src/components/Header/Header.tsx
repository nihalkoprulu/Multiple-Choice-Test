import { FC } from "react";
import { HeaderContainer, LogoContainer } from "./styled";
import Logo from "assets/icons/Logo";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
