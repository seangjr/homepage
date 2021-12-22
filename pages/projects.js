import { useRef } from "react";
import ProjectItem from "../components/projectitem/projectitem";
import { pageData } from "../lib/data";
import Section from "../components/section";
import { Container, Box, Text, useColorModeValue } from "@chakra-ui/react";

const Projects = () => {
  const menuItems = useRef(null);
  const color = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  return (
    <Container>
      <Box
        as="div"
        position="relative"
        boxSizing="border-box"
        overflow="hidden"
        pt={{ base: 0, sm: 10 }}
      >
        <ul ref={menuItems}>
          {pageData.map((project, index) => (
            <Section delay={0.05 * index} key={index}>
              <ProjectItem key={index} project={project} itemIndex={index} />
              <Box borderRadius="lg" bg={color} p={4} align="start" key={index}>
                <Text
                  fontFamily="M PLUS Rounded 1c"
                  fontSize="17px"
                  fontWeight="300"
                  key={index}
                >
                  {project.info}
                </Text>
              </Box>
            </Section>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Projects;
