import styled from "styled-components";
import { colors } from "styles/colors";

export const HeaderWrapper = styled.div`
  padding: 20px 0;
  background: ${colors.bg};
`;

export const Logo = styled.h1`
  color: ${colors.text};
  font-size: 28px;
  margin: 0;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
