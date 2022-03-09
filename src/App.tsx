import "./App.css";

import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/MainContent";

import { theme } from "./theme";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    <Image
                        src="./images/bg-main-mobile.png"
                        alt="background"
                        position="absolute"
                        zIndex="-1"
                        display={["block", "block", "none", "none"]}
                        top="-90px"
                        right="0px"
                    />
                    <Image
                        src="./images/bg-main-tablet.png"
                        alt="background"
                        position="absolute"
                        zIndex="-1"
                        display={["none", "none", "block", "none"]}
                        top="-50px"
                        left="0"
                        w="100%"
                    />
                    <Image
                        src="./images/bg-main-desktop.png"
                        alt="background"
                        position="absolute"
                        zIndex="-1"
                        display={["none", "none", "none", "block"]}
                        top="0px"
                        left="-200px"
                        w="100%"
                    />
                    <Header />
                    <Main />
                    <Footer />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
