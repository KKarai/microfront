import React, { lazy } from "react";

const UglyButton = lazy(() => import("shared/UglyButton"));
const Box = lazy(() => import("shared/Box"));

export const App = () => {
  return (
    <>
      <h2>App 2</h2>
      <React.Suspense fallback="shared loading">
        <Box style={{ marginBottom: 20 }} />
        <UglyButton>Shared Button</UglyButton>
      </React.Suspense>
    </>
  );
};

export default App;
