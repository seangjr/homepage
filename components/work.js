import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/projects">
      <Link>Projects</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt, onClick }) => (
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
    onClick={onClick}
  />
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
