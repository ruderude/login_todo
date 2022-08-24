import React from "react";
import {
  Link
} from "react-router-dom";

import { Button } from '@chakra-ui/react'

export const NotFound = () => {
  return (<>
    <h1>お探しのページは見つかりませんでした。</h1>
    <br />
    <Link to={`/`}>
      <Button colorScheme='red'>ホームに戻る</Button>
    </Link>
  </>);
};
