import { Container, Heading, Text, SimpleGrid, Box, VStack } from '@chakra-ui/react'

const About = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          About Me
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Who I Am
            </Heading>
            <Text fontSize="lg">
              I am a passionate web developer with expertise in modern web technologies.
              I love creating beautiful and functional web applications that provide
              great user experiences.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              My Skills
            </Heading>
            <Text fontSize="lg">
              • React.js & Next.js
              <br />
              • JavaScript/TypeScript
              <br />
              • HTML5 & CSS3
              <br />
              • UI/UX Design
              <br />
              • Responsive Web Design
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default About 