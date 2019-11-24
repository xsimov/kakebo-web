import React, { useState } from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";

const ExpenseForm = () => {
  const onSubmit = event => {
    event.preventDefault();
    console.log(value);
  };

  const [value, setValue] = useState(0);
  return (
    <form onSubmit={onSubmit}>
      <InputField value={value} onChange={e => setValue(e.target.value)} />
      <ButtonLink onClick={onSubmit}>Submit</ButtonLink>
    </form>
  );
};

export default ExpenseForm;
