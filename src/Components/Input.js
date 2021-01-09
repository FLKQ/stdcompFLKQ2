import React from "react";
import {
  Container,
  Label,
  InputField,
  TopLabel,
  Join,
  CreateAcc,
} from "../Components/Input.elements";
import red from '../Components/red.scss';

const Input = ({ type, name, label, id, text, star }) => {
  return (
    <Container>
      <TopLabel>{text}<div className="red">*</div></TopLabel>
      <Label>{label}</Label>
      <InputField type={type} name={name} />
    </Container>
  );
};

export default Input;
