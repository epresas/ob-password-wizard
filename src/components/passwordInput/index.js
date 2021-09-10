import React, { useState } from "react";
import zxcvbn from "zxcvbn";

import {
  Input,
  IconButton,
  InputGroup,
  ErrorMessage,
  PasswordStrength,
  Label,
} from "./styles";

const PasswordInput = ({ register, placeholder, name, error, label }) => {
  // debugger;
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const togglePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);

  const getPasswordStrength = (pass) => {
    if (pass.length) {
      const result = zxcvbn(pass);
      setPasswordStrength(Math.min(result.score + 1, 4));
    } else {
      setPasswordStrength(0);
    }
  };

  return (
    <InputGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={showPassword ? "text" : "password"}
        {...register(name)}
        onChange={(e) => getPasswordStrength(e.target.value)}
        placeholder={placeholder}
        error={!!error}
      />
      <PasswordStrength strength={passwordStrength} />
      <IconButton
        onClick={togglePasswordVisibility}
        showPassword={showPassword}
      />
      <ErrorMessage>{error && error.message}</ErrorMessage>
    </InputGroup>
  );
};

export default PasswordInput;
