import { Container, Heading, SimpleGrid, Box, Image, Text, VStack } from '@chakra-ui/react'

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      image: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3',
      image: 'https://via.placeholder.com/400x300',
    },
  ]

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          My Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ transform: 'scale(1.02)', transition: 'all 0.3s ease' }}
            >
              <Image src={project.image} alt={project.title} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text color="gray.600">{project.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects 