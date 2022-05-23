import React from 'react'
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { sanityClient, urlFor } from '../../sanity'

const Work = ({ projects }) => (
  <Layout title={projects.title.charAt(0).toUpperCase() + projects.title.slice(1)}>
    <Container>
    <Title cwp="projects">
        {projects.title.charAt(0).toUpperCase() + projects.title.slice(1)} <Badge>{projects.dateStarted}</Badge>
      </Title>
      <P>
        {projects.details}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href={projects.projectLink}>
            {projects.projectLink} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          {projects.tags.map((tag) => {
            if (!tag) return
            return (
              <Badge key={projects._id} mx={0.5}>{tag}</Badge>
            )
          })}
        </ListItem>
      </List>
      {projects?.imagesGallery.map((image) => {
        if (!image) return
        return <WorkImage key={projects._id} src={urlFor(image)} alt={projects.title} />
      })}
      
    </Container>
  </Layout>
);

export default Work;

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "projects" && slug.current == $id][0]{
    _id,
    title,
    slug {
      current
    },
    description,
    details,
    projectLink,
    tags,
    dateStarted,
    imagesGallery[] {
      asset
    }
  }` 

  const projects = await sanityClient.fetch(query, {
    id: params?.id,
  })
  console.log(projects)

  if (!projects) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      projects,
    }
  }
}
