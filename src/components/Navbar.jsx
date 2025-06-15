import { Box, Flex, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontWeight="bold" fontSize="xl">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            Dion Budi Riyanto
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar 