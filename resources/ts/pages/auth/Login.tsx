import React from "react";

import { Button, Grid, Box } from '@mui/material';
import TextField from '@mui/material/TextField';

export const Login = () => {
  return (<>
    <Grid container>
      <Grid item xs={12}>
        <h2>Login</h2>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="name"
              label="name"
              defaultValue=""
              placeholder="太郎"
            />
            <TextField
              required
              id="email"
              label="email"
              defaultValue=""
              placeholder="taro@test.com"
            />
            <TextField
              required
              id="password"
              label="password"
              type="password"
              autoComplete="current-password"
              placeholder="password"
            />
            </div>
        </Box>
      </Grid>   
    </Grid>
  </>);
};