import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex direction="column">
            <Image
                src="/images/logo.svg"
                alt="logo"
                w="146px"
                h="32px"
                mt={["39px", "39px", "62px"]}
                pl={["24px", "24px", 0, 0]}
                ml={[0, 0, "39px", "165px"]}
            />
            <Flex
                direction="column"
                pt={["64px", "64px", "95px", "127px"]}
                pl={["24px", "24px", 0, 0]}
                ml={[0, 0, "39px", "165px"]}
                color="marine-blue"
                w={["100%", "100%", "520px", "1015px"]}
            >
                <Heading
                    as="h1"
                    fontWeight="700"
                    fontSize={["40px", "40px", "64px", "88px"]}
                    lineHeight={["48px", "44px", "64px", "88px"]}
                    letterSpacing={["-0.45px", "-0.45px", "-0.73px", "-1px"]}
                >
                    We make your music sound extraordinary.
                </Heading>
                <Text
                    w={["auto", "auto", "auto", "825px"]}
                    pt="20px"
                    fontWeight="400"
                    fontSize={["16px", "16px", "18px", "20px"]}
                    lineHeight={["26px", "26px", "28px", "34px"]}
                >
                    A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music
                    sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain
                    control, reverb, and more!
                </Text>
            </Flex>
        </Flex>
    );
};
