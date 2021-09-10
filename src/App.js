import React from "react";
import "./i18n";
import GlobalStyles from "./styles/globalStyles";
import NewPassword from "./containers/NewPassword";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <main className="App-content">
        <NewPassword />
      </main>
    </div>
  );
};

export default App;
