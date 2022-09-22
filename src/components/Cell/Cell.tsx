import { Build } from "_types/build";
import { CellWrapper } from "components/Cell/styled";
import React from "react";

interface Props {
  id: string;
  isEmpty: boolean;
  build: Build;
}

export const Cell = ({ id, isEmpty, build }: Props) => {
  return (
    <CellWrapper
      style={{ background: isEmpty ? "#FFF" : "#000" }}
    ></CellWrapper>
  );
};
