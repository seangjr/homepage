import {
  Input,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  Button,
  Heading,
  Container,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()
  const [submitted, setSubmitted] = useState(false);
  async function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_EJS_SERVICE_ID, process.env.NEXT_PUBLIC_EJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setSubmitted(true);
    console.log(form)
  }

  return (
    <Container>
      <Section>
        <Box pt={5}>
          <Section delay={0.4}>
            <Heading>Let&apos;s get in touch!</Heading>
          </Section>
          <Box
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            borderRadius="lg"
            p={3}
          >
            <FormControl isRequired pb={5}>
              <form ref={form} onSubmit={handleOnSubmit}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input name="name" placeholder="John Doe" mb={5} type="text" />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  name="email"
                  placeholder="john@example.com"
                  mb={5}
                  type="email"
                />
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea name="message" placeholder="Type your message..." />
                <Button
                  mt={5}
                  isLoading={false}
                  isDisabled={submitted}
                  colorScheme="teal"
                  type="submit"
                >
                  {submitted ? (
                    <>
                      <CheckIcon mr={2} />
                      <Text>Submitted!</Text>
                    </>
                  ) : (
                    <Text>Submit</Text>
                  )}
                </Button>
              </form>
            </FormControl>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};

export default Contact;
