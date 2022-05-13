import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="Whatsupp">
        <Container>
            <Title>
                Whatsupp <Badge>2021-Present</Badge>
            </Title>
            <P>
                WhatsApp Clone using Styled Components. 1 to 1 messaging
                function.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://spewtify.seanrel.codes">
                        https://spewtify.seannrel.codes{" "}
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Firebase</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
);

export default Work;
