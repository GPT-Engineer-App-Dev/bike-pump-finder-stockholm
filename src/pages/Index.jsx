import { Container, Text, VStack, Box } from "@chakra-ui/react";
import Map from "../components/Map";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="nav" bg="blue.500" color="white" p={4} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">Stockholm Bike Pump Stations</Text>
      </Box>
      <Map />
    </Container>
  );
};

export default Index;