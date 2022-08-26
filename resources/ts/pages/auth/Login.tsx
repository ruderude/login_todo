import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Text,
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postForm = () => {
    console.log('post!');
    const data = {
      email: email,
      password: password
    }

    console.log(data);

    axios.get('/sanctum/csrf-cookie').then(response => {
      console.log(response);
      axios.post('/login', data)
        .then(response => {
          console.log('success!');
          console.log(response)
        })
        .catch(error => {
          console.log('error!');
          console.log(error)
        })
    });
    
  }


  return (<>
    <Center >
      <Box width="70%">
        <Heading as='h2' size='md'>ログイン</Heading>

        <Text color="red">
          email:test@test.com <br />
          pass:password
        </Text>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>PassWord</FormLabel>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Flex justify='end' align='center' mt={4}>
          <Button colorScheme="blue" onClick={postForm}>送信</Button>
        </Flex>
      </Box>
    </Center>
  </>);
};