import { FlexWrapper, HeaderWrapper, Logo } from "components/Header/styled";
import { InfoPanel } from "components/InfoPanel";
import { UserPanel } from "components/UserPanel";
import React from "react";
import { Container } from "styles/common";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <FlexWrapper>
          <Logo>Town-simulator</Logo>
          <InfoPanel />
          <UserPanel />
        </FlexWrapper>
      </Container>
    </HeaderWrapper>
  );
};
