import "@fontsource/ibm-plex-sans";

import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "375px",
    md: "768px",
    lg: "1440px",
    xl: "2650px",
    "2xl": "4000px",
});

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    breakpoints,
    config,
    fonts: {
        heading: "IBM Plex Sans",
        body: "IBM Plex Sans",
    },
    colors: {
        white: "#FCFAF9",
        "clear-blue": "#66E2DC",
        "tomato-red": "#FA7453",
        "clear-orange": "#FFB964",
        "marine-blue": "#191826",
    },
});
