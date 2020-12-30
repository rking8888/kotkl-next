import React from 'react';
import { AppBar, Toolbar, Button, Typography, Grid } from '@material-ui/core';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='flex-start'
          >
            <Typography variant='h6' align='center'>
              Knights of the Keeper League
            </Typography>
          </Grid>
          <Grid
            container
            direction='row'
            alignItems='center'
            spacing={2}
            justify='flex-end'
          >
            <Grid item>
              <Link href='/' passHref>
                <Button color='inherit'>Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href='/yahoo' passHref>
                <Button color='inherit'>Yahoo API</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
