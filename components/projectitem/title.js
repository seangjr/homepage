import Link from "next/link";
import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const TitleItem = styled.div`
  cursor: pointer;
  line-height: 1.25 !important;
  padding: 5px 0;
  position: relative;
  cursor: default;
  width: auto;
`;

const MenuTitle = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-size: 8.5vw;
  text-transform: lowercase;
  z-index: 1;
  line-height: 1.25;
`;

const Title = ({ title, handleMouseEnter, handleMouseLeave, path }) => {
  return (
    <Container>
      <TitleItem>
        <Box mt={5} align="start" display="flex" w={100} h={100}>
          <Link href={path}>
            <MenuTitle
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Heading
                as="h1"
                cursor="pointer"
                fontSize={{ base: 40, md: 70 }}
                fontFamily="Space Grotesk"
                color={useColorModeValue("teal.400", "teal.200")}
                transition="all ease 0.5s"
                _hover={{
                  color: useColorModeValue("teal.700", "whiteAlpha.900"),
                }}
              >
                {title}
              </Heading>
            </MenuTitle>
          </Link>
        </Box>
      </TitleItem>
    </Container>
  );
};

export default Title;
