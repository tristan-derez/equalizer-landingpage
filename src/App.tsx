import "./App.css";

import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

const queryClient = new QueryClient();

const theme = extendTheme({ config: { initialColorMode: "dark" } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Flex direction="column" boxSize="100%">
                    <NavBar />
                    <Hero />
                    <Main />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
