import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import VoxelDogLoader from "../voxel-dog-loader";
import Footer from "../footer";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sean Relampagos</title>
        <meta name="description" content="Sean's homepage" />
        <meta name="author" content="Sean Relampagos" />
        <meta name="author" content="awitsean" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seanzx_" />
        <meta name="twitter:creator" content="@seanzx_" />
        <meta name="twitter:image" content="/card.jpeg" />
        <meta property="og:site_name" content="Sean's homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}
        <Footer />
      </Container>
    </Box>
  );
}

export default Main;
