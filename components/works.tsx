import { spawn } from "child_process";
import React from "react";
import { Tile, TileWrapper, TileContent, TileBackground } from "./tile";
import { WorkBackground } from "./work";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <span className="text-9xl">Foo {progress}</span>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <span className="text-9xl">Data {progress}</span>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <span className="text-9xl">Data {progress}</span>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
