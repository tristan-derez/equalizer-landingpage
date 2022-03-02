import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillAndroid } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

export const Main = () => {
    return (
        <Box
            w={["100%"]}
            mt={["166px"]}
            minHeight="600px"
            bg="marine-blue"
            borderRadius="12px"
            backgroundImage="url('/images/bg-pattern-2.svg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            zIndex="1"
            color="white"
        >
            <Image
                src="/images/illustration-app.png"
                alt=""
                w="208px"
                h="430px"
                position="absolute"
                top="515px"
                right="85px"
                zIndex="999"
            />
            <Box
                w="100%"
                minHeight="546px"
                bg="tomato-red"
                zIndex="2"
                px="37px"
                borderRadius="12px"
                position="absolute"
                top="1100px"
            >
                <Heading as="h2" pt="48px" fontWeight={700} fontSize="32px" lineHeight="40px">
                    Premium EQ
                </Heading>
                <Text pt="12px" fontWeight="400" fontSize="18px" lineHeight="28px">
                    Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your
                    listening experience to a whole new level and access all our incredible features!
                </Text>
                <Flex pt="36px">
                    <Text fontWeight={700} fontSize="65px" lineHeight="52px">
                        $4 &nbsp;
                    </Text>
                    <Text fontSize="20px" fontWeight={400} lineHeight="32px" letterSpacing="-0.2px" alignSelf="center">
                        / Month
                    </Text>
                </Flex>
                <Button
                    leftIcon={<BsApple />}
                    bg="marine-blue"
                    variant="solid"
                    aria-label="iOS Download"
                    w="296px"
                    h="61px"
                    mt="32px"
                    borderRadius="12px"
                    fontWeight={700}
                    lineHeight="32px"
                    letterSpacing="0.18px"
                    fontSize="18px"
                >
                    iOS Download
                </Button>
                <Button
                    leftIcon={<AiFillAndroid />}
                    bg="white"
                    color="marine-blue"
                    variant="solid"
                    aria-label="Android Download"
                    w="296px"
                    h="61px"
                    mt="16px"
                    borderRadius="12px"
                    fontWeight={700}
                    lineHeight="32px"
                    letterSpacing="0.18px"
                    fontSize="18px"
                >
                    Android Download
                </Button>
            </Box>
        </Box>
    );
};
