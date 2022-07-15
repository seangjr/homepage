import Section from "../components/section";
import {
  QualificationSection,
  QualificationYear,
} from "../components/qualifications";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Divider,
  Button,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <Container display="flex">
      <Section>
        <Box>
          <Heading as="h3" variant="section-title">
            About Sean
          </Heading>

          <Box flexShrink={0} ml={{ md: 6 }} align="center" mt={10} pb={10}>
            <AspectRatio ratio={1 / 1} maxW="250px">
              <Image
                rounded="full"
                display="inline-block"
                src="/images/sean-about.jpg"
                alt="profile image"
              />
            </AspectRatio>
          </Box>
          <Paragraph>
            Sean (est. 2004) is a multidisciplinary software engineer based in
            Singapore. Any one definition is inadequate as he is logical, a
            creative thinker, producer and designer often seeking for new
            discoveries and ways to learn and master his craft. He hopes to add
            value to the industry through his expanded practice and discoveries
            in programming.
            <br />
            <br />
            Currently open to collaboration opportunities.
          </Paragraph>
        </Box>
        <Box mt={5}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              View projects
            </Button>
          </NextLink>
          <NextLink href="/contact">
            <Button ml={5} rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Contact
            </Button>
          </NextLink>
        </Box>
        <Divider mt={5} />
        <Box mt={5}>
          <Heading as="h3" variant="section-title">
            Qualifications
          </Heading>
          <QualificationSection>
            <QualificationYear>2017 - 2020</QualificationYear>
            Completed O levels at a local Singaporean highschool
          </QualificationSection>
          <QualificationSection>
            <QualificationYear>2021 - 2023</QualificationYear>
            Diploma in Information Technology (SE)
          </QualificationSection>
        </Box>
        <Divider mt={5} mb={5} />
        <strong> CV available upon request. </strong>
      </Section>
    </Container>
  );
};

export default About;
