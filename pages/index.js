import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Image,
  Link,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Container>
      <Section delay={0.1}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello! I am a Software Engineering student!  
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Sean Relampagos
            </Heading>
            <p>Developer / Designer / Producer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/sean.jpg"
              alt="profile image"
            />
          </Box>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I am a year 2 software engineer student with extensive experience in web development. I♥music, playing bass and keyboard, videography, and video games.
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://instagram.com/seangjr_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @seangjr_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/szeanx" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @szeanx
              </Button>
            </Link>
          </ListItem>
        </List>
        <Section delay={0.2}>
          <Box alignItems="start" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View projects
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Section>
    </Container>
  );
}
