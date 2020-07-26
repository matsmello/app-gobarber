import React from "react";
import { Image } from "react-native";
import {
  Container,
  Title,
  ForgetPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./styles";
import logoImg from "./../../assets/logo.png";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import Icon from "react-native-vector-icons/Feather";

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title>Faça seu Logon</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button onPress={() => console.log("Deu")}>Entrar</Button>

        <ForgetPassword onPress={() => {}}>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgetPassword>
      </Container>

      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />

        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
