import React from "react"
import Section from "../components/section"
import { sanityClient, urlFor } from "../sanity"
import Layout from "../components/layouts/article"
import { GridItem } from "../components/grid-item"
import {
  Container,
  SimpleGrid,
  Heading
} from "@chakra-ui/react"

const Blog = ({ blog }) => {
  
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Read a few articles!
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {blog.map((blogItem) => {
              if (!blogItem) return
              return (
                <GridItem
                  title={blogItem.title}
                  thumbnail={urlFor(blogItem.thumbnail)} 
                  href={`/blog/${blogItem.slug.current}`}
                  key={blog._id}
                />
              )
            })}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Blog

export const getServerSideProps = async() => {
  const query = `*[_type == "blog"]{
    _id,
    title,
    slug {
      current,
    },
    description,
    thumbnail {
      asset
    },
  }`

  const blog = await sanityClient.fetch(query)

  return {
    props: {
      blog, 
    }
  }
}
