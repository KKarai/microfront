import React, { lazy } from "react";

const Box = lazy(() => import("shared/Box"));
const Typography = lazy(() => import("shared/Typography"));

export const App = () => {
  return (
    <>
      <h2>App 1</h2>
      <React.Suspense fallback="shared loading">
        <Box style={{ marginBottom: 20, backgroundColor: "blue" }} />
        <Typography>Shared Ant Typography</Typography>
      </React.Suspense>
    </>
  );
};

export default App;
