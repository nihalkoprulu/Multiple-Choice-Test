import { FC } from "react";
import { LayoutViewContainerStyled } from "./styled";

interface LayoutViewContainerProps {
  children: React.ReactNode;
  size?: "xlarge" | "large" | "medium" | "small";
  margin?: string;
  padding?: string;
  paddingBottom?: string;
  minWidth?: string;
  contentalign?: string;
}

const LayoutViewContainer: FC<LayoutViewContainerProps> = ({
  children,
  size,
  margin,
  padding,
  minWidth,
  contentalign,
}) => (
  <LayoutViewContainerStyled
    size={size}
    margin={margin}
    padding={padding}
    minWidth={minWidth}
    contentalign={contentalign}
  >
    {children}
  </LayoutViewContainerStyled>
);

export default LayoutViewContainer;
