import React from "react";
import { Box, Heading, Text, Divider } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box>
      <Box
        w={["80%", "40%"]}
        textAlign="center"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
      >
        <Heading>Realfagskjelleren</Heading>
        <Text w="90%" color="black">
          Realfagskjelleren er en bar, og tilhører linjeforeningene Online,
          Volvox & Alkymisten, Delta og Spanskrøret. Kjelleren befinner seg i
          Herman Krags Veg 12. Kjelleren arrangerer lavterskel arrangementer
          hvor alle er velkomne, til vanlig er det åpent hver Fredag hvor en
          etter en tung uke kan ta seg en rolig tur for å slappe av og møte
          andre medstudenter. I tillegg pleier det å arrangeres andre fester nå
          og da hvor igjen alle er velkomne. Ellers er det mulig å booke
          kjelleren for egne arrangementer og sammenkomster.
        </Text>

        <Divider margin="10px" />
      </Box>
    </Box>
  );
};

export default Home;
