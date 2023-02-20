import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { desktop } from "../responsive";
import contact from "../assets/contact.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  background-image: url(${contact});
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${desktop({ height: "100vh", backgroundSize: "cover" })}
`;

const Wrapper = styled.div`
  width: 18rem;
  height: 100%;
  padding: 1.25rem;
  margin-bottom: 5rem;
  margin-top: 2rem;
  background-color: #ffffffab;
  -webkit-box-shadow: 36px 38px 66px -19px goldenrod;
  -moz-box-shadow: 36px 38px 66px -19px goldenrod;
  box-shadow: 36px 38px 66px -19px goldenrod;
  border-radius: 2rem;
  ${desktop({ width: "49rem", marginBottom: "0rem", height: "37rem" })}
`;

const Title = styled.h1`
  padding-top: 1rem;
  font-size: 1.5rem;
  font-family: "julee";
  color: black;
  text-align: center;
  ${desktop({ fontSize: "3rem" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  padding: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const Input = styled.input`
  width: 15rem;
  margin: 0rem 0.7rem 0rem 0rem;
  padding: 0.7rem;
  border-radius: 2rem;
  text-align: center;
  border: none;
  &::placeholder {
    text-align: center;
  }
`;

const Message = styled.textarea`
  resize: none;
  text-align: center;
  border-radius: 2rem;
  border: none;
  &::placeholder {
    text-align: center;
  }
  ${desktop({ width: "40rem" })}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${desktop({ flexDirection: "row" })}
`;

const Button = styled.button`
  font-family: "julee";
  font-size: 2rem;
  width: 15rem;
  border: none;
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  color: white;
  background-color: #4c9b4c;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
  &:nth-child(2) {
    background-color: #f85454;
  }
  &:hover:nth-child(2) {
    background-color: red;
    cursor: pointer;
  }
  ${desktop({ margin: "1rem ", width: "20rem" })}
`;

const ErrorYup = styled.p`
  color: tomato;
  text-align: center;
  font-size: 0.9rem;
  font-family: "julee";
  &::before {
    display: inline;
    content: "⚠";
  }
  ${desktop({ fontSize: "1.1rem" })}
`;

const Contact = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };

  const schema = yup
    .object({
      lastname: yup.string().max(50).required("Please enter your lastname"),
      firstname: yup.string().max(50).required(" Please enter your firstname"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .max(255)
        .required("Please enter a mail"),
      message: yup.string().max(255).required("Please enter a message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    alert(
      "Thank you for completing the form, a reply will be given to you as soon as possible"
    );
    navigate("/");
  };

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_9k238rp",
        "template_ag3xojo",
        form.current,
        "-F7_Yn5YXZZOlGfoZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            {errors.lastname && <ErrorYup>{errors.lastname.message}</ErrorYup>}

            <Label>
              Lastname: *
              <Input
                type="text"
                placeholder="Lastname"
                name="lastname"
                required
                {...register("lastname")}
              />
            </Label>
          </FormContainer>
          <FormContainer>
            {errors.firstname && (
              <ErrorYup>{errors.firstname.message}</ErrorYup>
            )}
            <Label>
              Firstname: *
              <Input
                type="text"
                placeholder="Firstname"
                name="firstname"
                required
                {...register("firstname")}
              />
            </Label>
          </FormContainer>
          <FormContainer>
            {errors.email && <ErrorYup>{errors.email.message}</ErrorYup>}
            <Label>
              E-mail: *
              <Input
                type="email"
                placeholder="Email"
                name="email"
                required
                {...register("email")}
              />
            </Label>
          </FormContainer>
          <FormContainer>
            <Label>
              Phone: 
              <Input
                placeholder="phone"
                name="phone"
              />
            </Label>
          </FormContainer>
          <FormContainer>
            {errors.message && <ErrorYup>{errors.message.message}</ErrorYup>}
            <Label>
              Message: *
              <Message
                cols="40"
                rows="10"
                placeholder="your message"
                name="message"
                {...register("message")}
              />
            </Label>
          </FormContainer>
          <ButtonContainer>
            <Button onClick={sendEmail}>Send</Button>
            <Button onClick={onHome}>Back to home</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
