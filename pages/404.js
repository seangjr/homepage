import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container mt={100}>
      <Heading as="h1">Not found</Heading>
      <Text>
        The page you&apos;re looking for is probably in another alternate
        universe.
      </Text>
      <Divider my={6} />

      <Box my={6} align="start">
        <NextLink href="/">
          <Button colorScheme="teal">Return home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
