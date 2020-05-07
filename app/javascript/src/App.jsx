import React from "react";
import {
  BrowserRouter as Router,
  Route
}  from "react-router-dom";

import PaymentSystem from "./components/payment-system";

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={PaymentSystem} />
      </div>
    </Router>
  );
}

export default App;
