import React from "react";
import {
  Link
} from "react-router-dom";
import { Heading, Box, Flex, Spacer, ButtonGroup, Button } from '@chakra-ui/react'

export const Header = () => {

  return (<>
    <Box bg='tomato' w='100%' p={2} color='white'>
      <Flex justify='center' align='center'>
        <Box>
          <Link to="/" className="">
            <Heading as='h1' size='md'>Home</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <ButtonGroup gap='2'>
            <Button colorScheme='red'>
              <Link to="/signup" className="">
                Sign Up
              </Link>
            </Button>
            <Button colorScheme='red'>
              <Link to="/login" className="">
                Login
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Box>
    
  </>);
};
