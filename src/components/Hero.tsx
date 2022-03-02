import { Flex, Heading, Text } from "@chakra-ui/react";

export const Hero = () => {
    return (
        <Flex direction="column" px="24px" pt="64px" color="marine-blue">
            <Heading as="h1" fontWeight="700" fontSize="40px" lineHeight="48px" letterSpacing="-0.45px">
                We make your music sound extraordinary.
            </Heading>
            <Text pt="20px" fontWeight="400" fontSize="16px" lineHeight="26px">
                A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music
                sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control,
                reverb, and more!
            </Text>
        </Flex>
    );
};
