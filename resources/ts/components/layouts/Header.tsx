import React from "react";
import axios from "axios";
import {
  useLocation,
  Link
} from "react-router-dom";
import { Heading, Box, Flex, Spacer, ButtonGroup, Button } from '@chakra-ui/react'

export const Header = () => {
  const path = useLocation().pathname;

  const logout = () => {
    axios.post('/logout')
      .then(response => {
        console.log('success!');
        console.log(response)
      })
      .catch(error => {
        console.log('error!');
        console.log(error)
      })
  }


  return (
    path === "/admin" ?
    <>
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
                <Link to="/me" className="">
                  Me
                </Link>
              </Button>
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
              <Button onClick={logout} colorScheme='red'>
                Logout
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
    </>
    :
    <>
      <Box bg='DeepSkyBlue' w='100%' p={2} color='white'>
        <Flex justify='center' align='center'>
          <Box>
            <Link to="/" className="">
              <Heading as='h1' size='md'>Home</Heading>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <ButtonGroup gap='2'>
              <Button colorScheme='blue'>
                <Link to="/me" className="">
                  Me
                </Link>
              </Button>
              <Button colorScheme='blue'>
                <Link to="/signup" className="">
                  Sign Up
                </Link>
              </Button>
              <Button colorScheme='blue'>
                <Link to="/login" className="">
                  Login
                </Link>
              </Button>
              <Button onClick={logout} colorScheme='blue'>
                Logout
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
    </>
  );

  // if (path === "/admin") {
  //   return (<>
  //     <Box bg='tomato' w='100%' p={2} color='white'>
  //       <Flex justify='center' align='center'>
  //         <Box>
  //           <Link to="/" className="">
  //             <Heading as='h1' size='md'>Home</Heading>
  //           </Link>
  //         </Box>
  //         <Spacer />
  //         <Box>
  //           <ButtonGroup gap='2'>
  //             <Button colorScheme='red'>
  //               <Link to="/me" className="">
  //                 Me
  //               </Link>
  //             </Button>
  //             <Button colorScheme='red'>
  //               <Link to="/signup" className="">
  //                 Sign Up
  //               </Link>
  //             </Button>
  //             <Button colorScheme='red'>
  //               <Link to="/login" className="">
  //                 Login
  //               </Link>
  //             </Button>
  //             <Button onClick={logout} colorScheme='red'>
  //               Logout
  //             </Button>
  //           </ButtonGroup>
  //         </Box>
  //       </Flex>
  //     </Box>
      
  //   </>);
  // } else {
  //   return (<>
  //     <Box bg='DeepSkyBlue' w='100%' p={2} color='white'>
  //       <Flex justify='center' align='center'>
  //         <Box>
  //           <Link to="/" className="">
  //             <Heading as='h1' size='md'>Home</Heading>
  //           </Link>
  //         </Box>
  //         <Spacer />
  //         <Box>
  //           <ButtonGroup gap='2'>
  //             <Button colorScheme='blue'>
  //               <Link to="/me" className="">
  //                 Me
  //               </Link>
  //             </Button>
  //             <Button colorScheme='blue'>
  //               <Link to="/signup" className="">
  //                 Sign Up
  //               </Link>
  //             </Button>
  //             <Button colorScheme='blue'>
  //               <Link to="/login" className="">
  //                 Login
  //               </Link>
  //             </Button>
  //             <Button onClick={logout} colorScheme='blue'>
  //               Logout
  //             </Button>
  //           </ButtonGroup>
  //         </Box>
  //       </Flex>
  //     </Box>
      
  //   </>);
  // }

  
};
