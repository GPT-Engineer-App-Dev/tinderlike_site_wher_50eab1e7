import { useState } from "react";
import { Box, Button, Flex, Text, Image, VStack, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaSmile, FaBatteryThreeQuarters, FaBed, FaFrown, FaRunning } from "react-icons/fa";

const moodCards = [
  { mood: "Happy", icon: <FaSmile />, description: "Feeling joyful and uplifted.", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbnxlbnwwfHx8fDE3MTM3MTE3MTN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Energized", icon: <FaBatteryThreeQuarters />, description: "Ready to take on the world.", image: "https://placehold.co/600x400" },
  { mood: "Tired", icon: <FaBed />, description: "Need some rest.", image: "https://images.unsplash.com/photo-1554188572-9d184b57d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMHBlcnNvbnxlbnwwfHx8fDE3MTM3MTE3MzB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Anxious", icon: <FaFrown />, description: "Feeling uneasy or worried.", image: "https://images.unsplash.com/photo-1473106995954-101fc128abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwcGVyc29ufGVufDB8fHx8MTcxMzcxMTczMnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { mood: "Motivated", icon: <FaRunning />, description: "Driven to achieve goals.", image: "https://placehold.co/600x400" },
];

const Index = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentCard((prev) => (prev === 0 ? moodCards.length - 1 : prev - 1));
    } else {
      setCurrentCard((prev) => (prev === moodCards.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" p={4}>
      <Heading mb={6}>How are you feeling today?</Heading>
      <VStack spacing={4} align="center">
        <Box boxSize="sm" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={moodCards[currentCard].image} alt={moodCards[currentCard].mood} />
          <Text fontSize="2xl" mt={2}>
            {moodCards[currentCard].mood}
          </Text>
          <Text>{moodCards[currentCard].description}</Text>
        </Box>
        <Flex>
          <IconButton aria-label="Swipe left" icon={<FaArrowLeft />} onClick={() => handleSwipe("left")} mr={2} />
          <IconButton aria-label="Swipe right" icon={<FaArrowRight />} onClick={() => handleSwipe("right")} />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
