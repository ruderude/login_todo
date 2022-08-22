import React from "react";
import {
  Link
} from "react-router-dom";

import { Button } from '@material-ui/core';

export const NotFound = () => {
  return (<>
    <h1>お探しのページは見つかりませんでした。</h1>
    <br />
    <Link to={`/`}>
      <Button color="secondary" variant="contained">ホームに戻る</Button>
    </Link>
  </>);
};
