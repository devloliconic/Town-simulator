import { Cell } from "components/Cell";
import { GridMap, MapWrapper } from "components/Map/styled";
import { cells } from "mock/cells";
import React from "react";
import { Container } from "styles/common";

export const Map = () => {
  const square = cells.map((cell) => (
    <Cell
      id={cell.id}
      build={cell.build}
      key={cell.id}
      isEmpty={cell.isEmpty}
    />
  ));
  return (
    <Container>
      <MapWrapper>
        <GridMap>{square}</GridMap>
      </MapWrapper>
    </Container>
  );
};
