import React, { useState } from "react";

import styles from "./FormInput.module.scss";

interface FormInputProps {
  input: { item: string; quantity: string; store: string; checked: boolean };
  setInputs: Function;
  idx: number;
}

type InputNames = "item" | "quantity" | "store";

export const FormInput = ({ input, setInputs, idx }: FormInputProps) => {
  const [inputValues, setInputValues] = useState({
    item: "",
    quantity: "",
    store: "",
    checked: false,
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const values = { ...inputValues };
    const inputNames = e.target.name as InputNames;
    values[inputNames] = e.target.value;
    setInputValues(values);
  }

  return (
    <div className={styles.FormInputs} key={`input-${idx}`}>
      <input
        className={styles.Item}
        name="item"
        type="text"
        placeholder={"Carrots"}
        value={inputValues.item}
        onChange={(e) => handleOnChange(e)}
      />
      <input
        className={styles.Quantity}
        name="quantity"
        type="number"
        placeholder={"0"}
        value={inputValues.quantity}
        onChange={(e) => handleOnChange(e)}
      />
      <input
        className={styles.Store}
        name="store"
        type="text"
        value={inputValues.store}
        placeholder={"Costco"}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};
