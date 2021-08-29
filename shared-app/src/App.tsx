import * as React from "react";
import { Box, Typography, UglyButton } from "./components";

export const App = () => {
  return (
    <>
      <h2>Shared App</h2>
      <Typography.Title style={{ marginBottom: 20 }}>
        Ant Title h1
      </Typography.Title>
      <Box style={{ marginBottom: 20 }} />
      <UglyButton style={{ marginBottom: 20 }}>Ugly</UglyButton>
    </>
  );
};

export default App;
