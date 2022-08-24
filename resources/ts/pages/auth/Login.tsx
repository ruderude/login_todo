import React from "react";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Center ,
  Spacer,
  Button
} from '@chakra-ui/react'

export const Login = () => {

  const postForm = () => {
    console.log('post!');
  }


  return (<>
    <Center >
      <Box width="70%">
        <Heading as='h2' size='md'>ログイン</Heading>
        <FormControl>
          <FormLabel>ID</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>PassWord</FormLabel>
          <Input type='password' />
        </FormControl>
        <Flex justify='end' align='center' mt={4}>
          <Button colorScheme="blue" onClick={postForm}>送信</Button>
        </Flex>
      </Box>
    </Center>
  </>);
};