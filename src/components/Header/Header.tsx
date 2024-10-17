import { FC } from "react";
import { HeaderContainer, LogoContainer } from "./styled";
import Logo from "assets/icons/Logo";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const navigate = useNavigate();
  const clickHandler: () => void = () => navigate("/");

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => clickHandler()}>
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
