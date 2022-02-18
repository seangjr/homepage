import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="Spewtify">
        <Container>
            <Title>
                Dauntless Bot <Badge>2022-Present</Badge>
            </Title>
            <P>
                A Discord bot that provides a variety of commands for the
                Dauntless cell group. It can play Wordle, play a random song,
                and provide a variety of information about the cell group.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Node.js 16, JavaScript</span>
                </ListItem>
                <ListItem>
                    <Meta>Repo Link</Meta>
                    <Link href="https://github.com/szeanx/dauntless-bot">
                        https://github.com/szeanx/dauntless-bot{" "}
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>
        </Container>
    </Layout>
);

export default Work;
