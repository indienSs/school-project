import React, {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import FormAdd from "./components/FormAdd";
import FormOutput from "./components/FormOutput"

function App() {
  
  const [formActive, setFormActive] = useState(false)
  
  function showForm() {
    setFormActive(prevActive => !prevActive)
  }
  
  return (
    <div className="app">
      <Header showForm={showForm}/>
        {formActive ?
          <div className="main-content">
            <FormAdd />
            <Form />
          </div> : 
          <FormAdd className="main-content" />
        }
      <FormOutput />
    </div>
  );
}

export default App;
