import { useRef } from "react";
import ProjectItem from "../components/projectitem/projectitem";
import Section from "../components/section";
import { Container, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { sanityClient, urlFor } from '../sanity'

const Projects = ({ projects }) => {
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
                    {projects.map((project) => (
                        <Section delay={0.05 * project._id} key={project._id}>
                            <ProjectItem
                                key={project._id}
                                project={project}
                                itemIndex={project._id}
                            />
                            <Box
                                borderRadius="lg"
                                bg={color}
                                p={4}
                                align="start"
                                key={project._id}
                            >
                                <Text
                                    fontFamily="Noto Sans JP"
                                    fontSize="17px"
                                    fontWeight="300"
                                    key={project._id}
                                >
                                    {project.description}
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

export const getServerSideProps = async () => {
  const query = `*[_type == "projects"]{
    _id,
    title,
    slug {
      current
    },
    description,
    mainImage {
      asset
    },
  }` 

  const projects = await sanityClient.fetch(query)

  return {
    props: {
      projects,
    }
  }
}

