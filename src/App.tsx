import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Main } from "./components/MainContent";
import { NavBar } from "./components/NavBar";
import { theme } from "./theme";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex
                    direction="column"
                    boxSize="100%"
                    bgImage={["url('./images/bg-main-mobile.png')", "url('./images/bg-main-tablet.png')", "url('./images/bg-main-desktop.png')"]}
                    bgPosition="top"
                    bgRepeat="no-repeat"
                >
                    <NavBar />
                    <Hero />
                    <Main />
                    <Footer />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
