import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Spewtify">
    <Container>
      <Title>
        Spewtify <Badge>2021-Present</Badge>
      </Title>
      <P>
        A Spotify 2.0 clone that uses the Spotify API to receive the user
        profile&apos;s playlists and songs. It also works as a remote for a
        device running Spotify.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://spewtify.seanrel.codes/">
            https://spewtify.seanrel.codes <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Platform, Responsive</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/spewtify_1.png" alt="Spewtify" />

      <WorkImage src="/images/spewtify_2.png" alt="Spewtify" />
    </Container>
  </Layout>
);

export default Work;
