import { sanityClient, urlFor } from '../../sanity'
import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const BlogPost = ({ blog }) => {
  return (
    <Layout title={blog.title}>
      <Container mb={5}>
        <Title cwp="blog">
          {blog.title} {blog.tags.map((tag) => {
            if (!tag) return
            return (
              <Badge key={blog._id}>{tag}</Badge>
            )
          })}
        </Title>
        <P>
          {blog.details}
        </P>
      </Container>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "blog" && slug.current == $id][0]{
    _id,
    title,
    slug {
      current
    },
    description,
    details,
    tags[],
    thumbnail {
      asset
    },
    imagesGallery[] {
      asset
    }
  }`

  const blog = await sanityClient.fetch(query, {
    id: params?.id
  })
  
  if (!blog) return {
    notFound: true
  }

  return {
    props: {
      blog
    }
  }
}

export default BlogPost;
