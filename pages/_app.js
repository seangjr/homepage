import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import '../styles/globals.scss'
import { AnimatePresence } from "framer-motion";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
