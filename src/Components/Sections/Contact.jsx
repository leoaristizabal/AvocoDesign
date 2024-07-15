import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(200, 106, 18, 0.5) 0px 4px 18px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: rgba(200, 106, 18, 0.5) 0px 4px 18px;
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: rgba(200, 106, 18, 0.5) 0px 4px 18px;
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background:rgba(200, 106, 18, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white };
  font-size: 18px;
  font-weight: 600;
  &:hover{
    box-shadow: rgba(200, 106, 18, 0.5) 0px 4px 18px;
    cursor: pointer;
  }
`;


const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hfnp8yp",
        "template_yrhm9cp",
        form.current,
        "7HnUfSwkKru4zGnhH"
      )
      .then(
        (result) => {
          alert("Mensaje Enviado");
          form.current.result();
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <Container id="Contacto">
      <Wrapper>
        <Title>Contacto</Title>
        <Desc
          style={{
            marginBottom: "20px",
          }}
        >
          Contáctanos si tienes alguna duda o quieres iniciar un proyecto!
        </Desc>
        <ContactForm ref={form} onSubmit={handelSubmit}>
          <ContactTitle>Escríbenos 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};
export default Contact