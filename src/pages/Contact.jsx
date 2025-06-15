import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Box,
  VStack,
  Icon,
  Link,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/yourusername',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:your.email@example.com',
    },
  ]

  return (
    <Container maxW="container.xl" py={20}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          Get in Touch
        </Heading>

        <Text fontSize="xl" textAlign="center" color="gray.600">
          Feel free to reach out to me through any of these platforms
        </Text>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} width="100%">
          {socialLinks.map((social, index) => (
            <Box
              key={index}
              textAlign="center"
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s ease' }}
            >
              <Link href={social.href} isExternal>
                <VStack spacing={3}>
                  <Icon as={social.icon} w={8} h={8} />
                  <Text>{social.label}</Text>
                </VStack>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Contact 