import React from "react";
import {
  Container,
  Form,
  Text,
  FormatContent,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from "./SigninElements";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormatContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required></FormInput>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Coutinue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormatContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
