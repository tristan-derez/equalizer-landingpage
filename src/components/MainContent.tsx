import { Box, Button, Flex, Heading, Image, Text, Center } from "@chakra-ui/react";
import { AiFillAndroid } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

export const Main = () => {
    return (
        <Flex justifyContent="center">
            <Box
                w="100%"
                mt={["166px", "166px", "249px", "321px"]}
                mx={[0, 0, "39px", "165px"]}
                height="600px"
                bg="marine-blue"
                borderRadius="12px"
                backgroundImage="url('/images/bg-pattern-2.svg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                zIndex="1"
                position="relative"
                color="white"
            >
                <Image
                    src="/images/illustration-app.png"
                    alt=""
                    w={["208px", "208px", "270px", "312px"]}
                    h={["430px", "430px", "556px", "642px"]}
                    position="absolute"
                    top={["-98px", "-98px", "-138px", "-213px"]}
                    left={["50%", "50%", "64px", "102px"]}
                    transform={["translate(-50%, 0)", "translate(-50%, 0)", "translate(0, 0)", "translate(0, 0)"]}
                    zIndex="2"
                />
                <Box
                    w={["100%", "100%", "399px", "446px"]}
                    minHeight={["546px", "546px", "546px", "625px"]}
                    bg="tomato-red"
                    zIndex="3"
                    px="37px"
                    borderRadius="12px"
                    position="absolute"
                    right={[0, 0, "58px"]}
                    top={["480px", "480px", "150px", "90px"]}
                >
                    <Heading as="h2" pt="48px" fontWeight={700} fontSize="32px" lineHeight="40px">
                        Premium EQ
                    </Heading>
                    <Text
                        pt="12px"
                        fontWeight="400"
                        fontSize={["18px", "18px", "18px", "20px"]}
                        lineHeight={["28px", "28px", "28px", "34px"]}
                    >
                        Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your
                        listening experience to a whole new level and access all our incredible features!
                    </Text>
                    <Flex pt="36px">
                        <Text fontWeight={700} fontSize="65px" lineHeight="52px">
                            $4 &nbsp;
                        </Text>
                        <Text
                            fontSize="20px"
                            fontWeight={400}
                            lineHeight="32px"
                            letterSpacing="-0.2px"
                            alignSelf="center"
                        >
                            / Month
                        </Text>
                    </Flex>
                    <Center flexDirection="column">
                        <Button
                            leftIcon={<BsApple />}
                            bg="marine-blue"
                            variant="solid"
                            aria-label="iOS Download"
                            w="100%"
                            h="61px"
                            mt={["32px", "32px", "32px", "46px"]}
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
                            w="100%"
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
                    </Center>
                </Box>
            </Box>
        </Flex>
    );
};
