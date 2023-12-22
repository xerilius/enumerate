import React, { useState } from "react";
import { FormInput } from "./components";
import { Button, Categories } from "../../components";

import styles from "./Form.module.scss";
const DEFAULT_VALUES = {
  item: "",
  quantity: "0",
  store: "",
  checked: false,
};

export const Form = () => {
  const [inputs, setInputs] = useState([DEFAULT_VALUES]);

  function handleAdd() {
    setInputs([...inputs, DEFAULT_VALUES]);
  }

  function handleRemove(idx: number) {
    const updatedInputs = [...inputs];
    updatedInputs.splice(idx, 1);
    setInputs(updatedInputs);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // send inputs value to backend
  }

  return (
    <div className={styles.FormContainer}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <Categories />
        {inputs.map((input, idx) => {
          return (
            <div key={idx}>
              <FormInput
                key={`${input.item}-${idx}`}
                input={input}
                idx={idx}
                setInputs={setInputs}
              />
              <Button onClick={() => handleRemove(idx)}>Remove</Button>
            </div>
          );
        })}
      </form>
      <Button onClick={handleAdd}>Add more</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};
