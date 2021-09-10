import React, { useState } from "react";

import {
  InputGroup,
  TextAreaControl,
  ErrorMessage,
  Label,
  Counter,
} from "./styles";

const TextArea = ({ register, placeholder, name, error, label }) => {
  const MAX_CHARS = 255;
  const [currentChars, setCurrentChars] = useState(0);

  const getRemainingChars = (numberOfChars) => {
    setCurrentChars(numberOfChars);
  };

  return (
    <InputGroup>
      <Label htmlFor={name}>{label}</Label>
      <TextAreaControl
        id={name}
        {...register(name)}
        placeholder={placeholder}
        error={!!error}
        onChange={(e) => getRemainingChars(e.target.value.length)}
      />
      <Counter>
        {currentChars}/{MAX_CHARS}
      </Counter>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputGroup>
  );
};

export default TextArea;
