import { Box, Container, Heading, Text, Button, Stack, Image, SimpleGrid, VStack, HStack, Icon, useColorModeValue, Link, Flex, Collapse, useDisclosure } from '@chakra-ui/react'
import { FaCode, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { SiPhp, SiJavascript, SiNodedotjs, SiPython, SiMysql, SiGit, SiJira } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)
const MotionStack = motion(Stack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionImage = motion(Image)
const MotionHStack = motion(HStack)
const MotionVStack = motion(VStack)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skills = [
  {
    name: 'PHP',
    icon: SiPhp,
    color: '#777BB4',
    description: 'Laravel, CodeIgniter, WordPress'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    description: 'React, Vue, TypeScript'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
    description: 'Express, NestJS, REST APIs'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB',
    description: 'Django, Flask, Data Science'
  },
  {
    name: 'SQL',
    icon: SiMysql,
    color: '#4479A1',
    description: 'MySQL, PostgreSQL, MongoDB'
  },
  {
    name: 'Git',
    icon: SiGit,
    color: '#F05032',
    description: 'Version Control, CI/CD'
  },
  {
    name: 'Agile',
    icon: SiJira,
    color: '#0052CC',
    description: 'Scrum, Kanban, JIRA'
  },
  {
    name: 'Azure',
    icon: null,
    color: '#0078D7',
    description: 'Cloud Services, DevOps',
    image: 'https://via.placeholder.com/48'
  }
]

const cardVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
}

const experiences = [
  {
    title: 'Software Developer Team Lead',
    period: 'Sep 2023 - Present · 1 yr 10 mos',
    location: 'Jakarta, Indonesia · On-site',
    responsibilities: [
      'Conducting daily stand-up briefings to align team goals and progress',
      'Designing project architecture and database structures',
      'Assigning task ownership and ensuring accountability',
      'Coordinating cross-departmental communication for project alignment',
      'Reviewing code and ensuring adherence to best practices',
      'Mentoring junior developers and fostering a collaborative team culture',
      'Supporting development by coding APIs when needed'
    ]
  },
  {
    title: 'Back End Developer',
    period: 'Sep 2019 - Aug 2023 · 4 yrs',
    location: 'Jakarta Metropolitan Area · Hybrid',
    responsibilities: [
      'Collaboratively building RESTful APIs for various applications',
      'Assisting in database schema design and optimization',
      'Conducting technical research to support project requirements',
      'Ensuring code quality and maintainability across modules'
    ]
  },
  {
    title: 'Trainee',
    period: 'Jun 2019 - Sep 2019 · 4 mos',
    location: 'Jakarta, Indonesia · On-site',
    responsibilities: [
      'Developing full-stack applications as part of learning modules',
      'Understanding project architecture, team workflows, and interdepartmental communication',
      'Gaining hands-on experience with company tech stack and development standards'
    ]
  }
]

const ExperienceCard = ({ job, index, cardBg, headingColor, textColor, isLast }) => {
  const { isOpen, onToggle } = useDisclosure()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Flex position="relative" mb={isLast ? 0 : 8}>
      {/* Timeline line */}
      <Box
        position="absolute"
        left="24px"
        top="0"
        bottom={isLast ? "50%" : "0"}
        width="2px"
        bg="blue.500"
        opacity={0.3}
      />
      
      {/* Timeline dot */}
      <Box
        position="absolute"
        left="16px"
        top="24px"
        width="16px"
        height="16px"
        borderRadius="full"
        bg="blue.500"
        zIndex={1}
      />

      {/* Content */}
      <MotionBox
        ml="48px"
        flex="1"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        whileHover="hover"
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Flex
          direction="column"
          p={6}
          bg={cardBg}
          borderRadius="xl"
          boxShadow="xl"
          position="relative"
          overflow="hidden"
          cursor="pointer"
          onClick={onToggle}
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'blue.500',
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.3s ease',
          }}
          _hover={{
            boxShadow: '2xl',
          }}
        >
          <Flex justify="space-between" align="center" mb={4}>
            <Box>
              <Heading size="lg" color={headingColor} mb={2}>
                {job.title}
              </Heading>
              <Text color="blue.500" fontWeight="medium" mb={1}>
                {job.period}
              </Text>
              <Text color="gray.500">
                {job.location}
              </Text>
            </Box>
            <Icon
              as={isOpen ? FaChevronUp : FaChevronDown}
              color="blue.500"
              w={6}
              h={6}
              transition="transform 0.3s ease"
              transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
            />
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <VStack align="start" spacing={3} pt={4} borderTop="1px solid" borderColor="gray.200">
              {job.responsibilities.map((responsibility, idx) => (
                <HStack key={idx} spacing={3}>
                  <Icon as={FaCode} color="blue.500" />
                  <Text color={textColor}>
                    {responsibility}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Collapse>
        </Flex>
      </MotionBox>
    </Flex>
  )
}

const Home = () => {
  const bgColor = useColorModeValue('rgba(247, 250, 252, 0.95)', 'rgba(26, 32, 44, 0.95)')
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(45, 55, 72, 0.9)')
  const sectionBg = useColorModeValue('rgba(237, 242, 247, 0.95)', 'rgba(26, 32, 44, 0.95)')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const headingColor = useColorModeValue('gray.800', 'white')
  const iconColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Box 
      bg={bgColor} 
      minH="100vh"
      minW="100vw"
      backgroundImage="linear-gradient(135deg, rgba(237, 242, 247, 0.95) 0%, rgba(247, 250, 252, 0.95) 100%)"
      _dark={{
        backgroundImage: "linear-gradient(135deg, rgba(26, 32, 44, 0.95) 0%, rgba(45, 55, 72, 0.95) 100%)"
      }}
    >
      {/* Hero Section */}
      <Container maxW="100%" px={{ base: 4, md: 8, lg: 16 }} py={20}>
        <MotionStack 
          spacing={8} 
          align="center" 
          textAlign="center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <MotionBox
            w="200px"
            h="200px"
            borderRadius="full"
            overflow="hidden"
            border="4px solid"
            borderColor="gray.200"
            boxShadow="xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            _hover={{ transform: 'scale(1.05)' }}
          >
            <MotionImage
              src="/me.jpg"
              alt="Dion Budi Riyanto"
              objectFit="cover"
              w="100%"
              h="100%"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </MotionBox>
          <MotionHeading 
            as="h1" 
            size="2xl" 
            color={headingColor}
            variants={fadeInUp}
          >
            Dion Budi Riyanto
          </MotionHeading>
          <MotionText 
            fontSize="xl" 
            color={textColor}
            variants={fadeInUp}
          >
            I'm a passionate developer focused on creating amazing web experiences
          </MotionText>
          <MotionHStack 
            spacing={6} 
            mt={4}
            variants={fadeInUp}
          >
            <Link href="https://github.com/yourusername" isExternal>
              <Icon
                as={FaGithub}
                w={8}
                h={8}
                color={iconColor}
                transition="all 0.3s ease"
                _hover={{ color: 'gray.800', transform: 'scale(1.2)' }}
              />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" isExternal>
              <Icon
                as={FaLinkedin}
                w={8}
                h={8}
                color={iconColor}
                transition="all 0.3s ease"
                _hover={{ color: '#0077B5', transform: 'scale(1.2)' }}
              />
            </Link>
            <Link href="https://twitter.com/yourusername" isExternal>
              <Icon
                as={FaTwitter}
                w={8}
                h={8}
                color={iconColor}
                transition="all 0.3s ease"
                _hover={{ color: '#1DA1F2', transform: 'scale(1.2)' }}
              />
            </Link>
            <Link href="https://instagram.com/yourusername" isExternal>
              <Icon
                as={FaInstagram}
                w={8}
                h={8}
                color={iconColor}
                transition="all 0.3s ease"
                _hover={{ color: '#E1306C', transform: 'scale(1.2)' }}
              />
            </Link>
          </MotionHStack>
        </MotionStack>
      </Container>

      {/* Skills Section */}
      <Box py={20} bg={sectionBg}>
        <Container maxW="100%" px={{ base: 4, md: 8, lg: 16 }}>
          <MotionVStack 
            spacing={12}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <MotionHeading 
              as="h2" 
              size="xl" 
              color={headingColor}
              variants={fadeInUp}
            >
              <Icon as={FaCode} mr={2} />
              Skills
            </MotionHeading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="100%">
              {skills.map((skill, index) => (
                <MotionBox
                  key={skill.name}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Flex
                    direction="column"
                    align="center"
                    p={6}
                    bg={cardBg}
                    borderRadius="xl"
                    boxShadow="xl"
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: skill.color,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                    _hover={{
                      _before: {
                        transform: 'scaleX(1)',
                      },
                      boxShadow: '2xl',
                    }}
                  >
                    <Icon
                      as={skill.icon}
                      w={12}
                      h={12}
                      color={skill.color}
                      mb={4}
                      transition="transform 0.3s ease"
                      _groupHover={{ transform: 'scale(1.1)' }}
                      display={skill.icon ? 'block' : 'none'}
                    />
                    {!skill.icon && (
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        w={12}
                        h={12}
                        mb={4}
                        transition="transform 0.3s ease"
                        _groupHover={{ transform: 'scale(1.1)' }}
                      />
                    )}
                    <Heading size="md" mb={2} color={headingColor}>
                      {skill.name}
                    </Heading>
                    <Text color={textColor} textAlign="center" fontSize="sm">
                      {skill.description}
                    </Text>
                  </Flex>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Work Experience Section */}
      <Box py={20}>
        <Container maxW="100%" px={{ base: 4, md: 8, lg: 16 }}>
          <MotionVStack 
            spacing={12}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <MotionHeading 
              as="h2" 
              size="xl" 
              color={headingColor}
              variants={fadeInUp}
            >
              <Icon as={FaBriefcase} mr={2} />
              Work Experience
            </MotionHeading>
            <Box w="100%" position="relative">
              {experiences.map((job, index) => (
                <ExperienceCard 
                  key={job.title} 
                  job={job} 
                  index={index}
                  cardBg={cardBg}
                  headingColor={headingColor}
                  textColor={textColor}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </Box>
          </MotionVStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box py={20} bg={sectionBg}>
        <Container maxW="100%" px={{ base: 4, md: 8, lg: 16 }}>
          <MotionVStack 
            spacing={12}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <MotionHeading 
              as="h2" 
              size="xl" 
              color={headingColor}
              variants={fadeInUp}
            >
              <Icon as={FaProjectDiagram} mr={2} />
              Projects
            </MotionHeading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
              {[
                { title: 'Project 1', description: 'Description of your project and technologies used' },
                { title: 'Project 2', description: 'Description of your project and technologies used' }
              ].map((project, index) => (
                <MotionBox
                  key={project.title}
                  p={6}
                  shadow="xl"
                  borderRadius="lg"
                  bg={cardBg}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  _hover={{ transform: 'translateY(-5px)' }}
                >
                  <Heading size="md" mb={4} color={headingColor}>{project.title}</Heading>
                  <Text color={textColor}>{project.description}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>

      {/* Education Section */}
      <Box py={20}>
        <Container maxW="100%" px={{ base: 4, md: 8, lg: 16 }}>
          <MotionVStack 
            spacing={12}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <MotionHeading 
              as="h2" 
              size="xl" 
              color={headingColor}
              variants={fadeInUp}
            >
              <Icon as={FaGraduationCap} mr={2} />
              Education
            </MotionHeading>
            <Stack spacing={8} w="100%">
              <MotionBox
                p={6}
                shadow="xl"
                borderRadius="lg"
                bg={cardBg}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <Heading size="md" color={headingColor}>Bachelor's Degree in Computer Science</Heading>
                <Text color="gray.500">University Name • 2014 - 2018</Text>
                <Text mt={4} color={textColor}>Description of your studies and achievements</Text>
              </MotionBox>
            </Stack>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 