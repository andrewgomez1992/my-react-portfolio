import React from "react";
import {
  ContactContainer,
  Form,
  Input,
  TextArea,
  SubmitButton,
} from "./styles/Contact.styles";
import { HeaderContainer, Title } from "./styles/About.styles";

const Contact = ({ title, description, formAction, buttonText }) => {
  return (
    <ContactContainer id="contact">
      <HeaderContainer>
        <Title>
          <p>{title}</p>
        </Title>
        <div>{description}</div>
      </HeaderContainer>
      <Form method="POST" action={formAction}>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="name"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          required
        />
        <TextArea
          placeholder="Message"
          name="message"
          rows="10"
          autoComplete="off"
          required
        ></TextArea>
        <SubmitButton>{buttonText}</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
