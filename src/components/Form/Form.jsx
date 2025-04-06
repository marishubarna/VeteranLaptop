import React, { useState, useEffect } from "react";
import "../styles/Form.css";
import FormImages from "../../assets/FormImages.svg";
import { FormQuestion } from "../Data/TabsDate";

const Form = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [errors, setErrors] = useState({ name: false, email: false });

  useEffect(() => {
    if (name || email) {
    }
  }, []);

  const handleValidation = () => {
    const newErrors = {
      name: name.trim() === "",
      email: email.trim() === "",
    };

    setErrors(newErrors);

    // If there are no errors, proceed with form submission logic
    if (!newErrors.name && !newErrors.email) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    }
  };

  return (
    <div className="formContainerDisplay">
      <div className="imagesContainerForm">
        <img src={FormImages} alt="" />
      </div>

      <div className="FormContainer">
        <h1 className="headerForm">{FormQuestion.title}</h1>
        <div className="formCheckBox-container">
          {FormQuestion.questions.map((item) => (
            <form key={item.id} className="checkbox-form">
              <input
                type="checkbox"
                name={`checkbox-${item.id}`}
                id={`checkbox-${item.id}`}
                className="ChechBoxStyleIcon"
              />
              <label className="LabelStyles" htmlFor={`checkbox-${item.id}`}>
                {item.question}
              </label>
            </form>
          ))}
        </div>

        <div className="NameContainer">
          <label className="LabelInputsFormContainer">Ваше ім'я *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="InputStyles"
            type="text"
            style={errors.name ? { border: "1px solid #D9363E" } : {}}
          />
        </div>
        <div className="EmailContainer">
          <label className="LabelInputsFormContainer">Ваш email *</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="InputStyles"
            type="email"
            style={errors.email ? { border: "1px solid #D9363E" } : {}}
          />
        </div>
        <div className="buttonDisplay">
          <button
            type="button"
            className="buttonStylesNextStep"
            onClick={handleValidation}
          >
            Далі &#8594;
          </button>
          <button type="submit" className="buttonStylesLink"></button>
        </div>
      </div>
    </div>
  );
};

export default Form;
