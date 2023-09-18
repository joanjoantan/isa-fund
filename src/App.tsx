// App.tsx
import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const Dashboards = lazy(() => import("./pages/Investment"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboards />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
