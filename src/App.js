import React, {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import FormAdd from "./components/FormAdd";

function App() {
  
  const [formActive, setFormActive] = useState(false)
  
  function showForm() {
    setFormActive(true)
  }
  
  return (
    <div className="app">
      <Header showForm={showForm}/>
      <div className="main-content">
        <FormAdd />
        {formActive && <Form />}
      </div>
    </div>
  );
}

export default App;
