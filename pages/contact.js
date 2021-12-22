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
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <Container>
      <Section>
        <Box pt={5}>
          <Section delay={0.1}>
            <Heading>Let&apos;s get in touch!</Heading>
          </Section>
          <Box
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            borderRadius="lg"
            p={3}
          >
            <FormControl isRequired pb={5}>
              <form action="post" onSubmit={handleOnSubmit}>
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
