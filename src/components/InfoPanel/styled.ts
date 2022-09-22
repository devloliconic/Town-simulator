import styled from "styled-components";
import { colors } from "styles/colors";

export const Panel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${colors.infoPanel};
  padding: 0 16px;
  border-radius: 10px;
`;

export const Resource = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  color: ${colors.text};
`;
