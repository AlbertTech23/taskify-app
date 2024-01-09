import { useState } from "react";
import "./App.css";
import InputField from "./components/InputFiels/InputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="heading">TASKIFY</div>
      <InputField />
    </div>
  );
};

export default App;
