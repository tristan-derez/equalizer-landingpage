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
                <Flex
                    direction="column"
                    boxSize="100%"
                    backgroundImage={[
                        "url('images/bg-main-mobile.png')",
                        "url('images/bg-main-mobile.png')",
                        "url('images/bg-main-tablet.png')",
                        "url('images/bg-main-desktop.png')",
                    ]}
                    bgPosition={[
                        "top -250px right -200px",
                        "top -250px right -200px",
                        "top -150px left -200px",
                        "top -150 left -20px",
                    ]}
                    bgRepeat="no-repeat"
                    bgSize={["100%"]}
                >
                    <Header />
                    <Main />
                    <Footer />
                </Flex>
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
